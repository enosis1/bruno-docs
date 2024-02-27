// imports have to start with "./src" instead of "src"
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/theme-switch";
import { CommandMenuTrigger } from "@/components/command-menu";

const themeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Bruno Docs",
      additionalLinkTags: [
        {
          href: "/bruno.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/bruno.png",
          rel: "apple-touch-icon",
          sizes: "32x32",
          type: "image/png",
        },
      ],
    };
  },
  logo: <Logo />,
  project: {
    link: "https://github.com/usebruno/bruno",
  },
  chat: {
    link: "https://discord.com/invite/KgcZUncpjq",
  },
  navbar: {
    extraContent: <ModeToggle className="ml-1" />,
  },
  docsRepositoryBase: "https://github.com/usebruno/bruno-docs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Bruno Docs" />
      <meta property="og:description" content="The open-source API Client" />
    </>
  ),
  search: {
    component: CommandMenuTrigger,
  },
};

export default themeConfig;
