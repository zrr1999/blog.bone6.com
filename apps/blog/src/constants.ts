import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/zrr1999",
    linkTitle: `${SITE.title} 的 GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:me@zrr.dev",
    linkTitle: `发邮件到 me@zrr.dev`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: "通过 WhatsApp 分享这篇文章",
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: "在 Facebook 分享这篇文章",
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: "在 X 分享这篇文章",
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: "通过 Telegram 分享这篇文章",
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: "在 Pinterest 分享这篇文章",
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=%E5%88%86%E4%BA%AB%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0&body=",
    linkTitle: "通过邮件分享这篇文章",
    icon: IconMail,
  },
] as const;
