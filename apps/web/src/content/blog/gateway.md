---
title: "利用 nftables 搭建 Linux 网关"
author: "利用 nftables 搭建 Linux 网关"
description: "与 OpenWRT 相比，自建 Linux 网关更加灵活，而且可以使用自己熟悉的任何发行版"
pubDatetime: "2024-08-21"
modDatetime: "2024-08-21"
---

目前，适合个人使用的软路由系统主要包括 iKuai、OpenWRT 和 RouterOS，其中 RouterOS 我没有用过，
iKuai 性能和稳定性都很不错，但是扩展性比较差，增加功能很困难，而 OpenWRT 性能和稳定性略逊于 iKuai，
但是扩展性很强，有丰富的插件可以使用，所以许多人都是 iKuai+OpenWRT 双路由方案，这种方案在一定程度上是可以满足我的需求的，
但是这种方案对于我来讲，各种插件的配置文件散落在系统的各个位置，不利于维护和备份，而且我一直没有找到方法用 VSCode 连接 OpenWRT 的方法，
所以我决定自建一个 Linux 网关。

## 整体架构

我使用的方案是 iKuai+ArchLinux 双路由的方案，iKuai 作为主路由，主要负责 DHCP和拨号，
ArchLinux 作为旁路由，负责运行各种服务（例如 DNS 和代理）。

## 实施方案

我使用的是 ArchLinux 搭建的网关，可以使用下面命令安装一些必要的包：

```bash
echo "Initializing pacman keyring"
pacman-key --init
pacman-key --populate archlinux
pacman-key --refresh-keys

echo "Setting up pacman mirrorlist"
pacman -S --noconfirm --needed reflector
reflector --save /etc/pacman.d/mirrorlist --country China --protocol https --latest 5

echo "Installing basic tools"
pacman -S --noconfirm --needed base-devel vim git wget unzip cronie
pacman -S --noconfirm --needed iproute2 dnsutils lsof dhclient termshark

echo "Installing paru"
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
cd ..
rm -rf paru
```

由于 paru 需要使用非 root 用户，所以需要创建一个非 root 用户，然后使用这个用户安装其他所需要的包：

```bash
sudo pacman -S --noconfirm --needed yq smartdns
paru -S --noconfirm --needed mosdns-bin metacubexd mihomo
```

然后使用 systemctl 启动这些服务：

```bash
systemctl enable mosdns
systemctl start mosdns
systemctl enable smartdns
systemctl start smartdns

systemctl enable mihomo
systemctl start mihomo
systemctl enable metacubexd
systemctl start metacubexd
```

未完待续
