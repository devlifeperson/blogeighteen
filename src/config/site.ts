import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Global News Network - World in Focus",
  description: "Comprehensive coverage of global news and current events..",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Image Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Image Compression Tool",
        desc: "Reduce image size without compromising quality.",
        href: "https://review360.info",
      },
      {
        title: "Resize Images Online",
        desc: "Quickly resize images to fit your website or social media.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Add Watermark to Images",
        desc: "Add custom watermarks to protect your photos.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Convert Image Formats",
        desc: "Easily convert images between formats like JPEG, PNG, WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Store your images on the cloud for easy sharing.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Crop Images",
        desc: "Crop your images to the size or aspect ratio you need.",
        href: "https://review360.info/image-crop",
      },
    ],
  },
  {
    title: "SEO Tools",
    slug: "seo-tools",
    tools: [
      {
        title: "Google Cache Viewer",
        desc: "Check the cached version of your site in Google’s index.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Meta Tag Analyzer",
        desc: "Analyze and improve your website’s meta tags for better SEO.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Backlink Generator",
        desc: "Generate backlinks to increase your site’s authority and ranking.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "URL Redirect Checker",
        desc: "Check if your URLs redirect correctly for optimal SEO.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Index Checker",
        desc: "Verify if your website’s pages are indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Website Security Test",
        desc: "Perform a security test on your website to identify threats.",
        href: "https://tools360s.com/safe-browsing",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare two text documents and identify the differences.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Count the words, characters, and sentences in your text.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "Miscellaneous Tools",
    slug: "misc-tools",
    tools: [
      {
        title: "Browser Update Check",
        desc: "Check if your browser is updated to ensure security and performance.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Public IP Finder",
        desc: "Discover your public IP address for network-related tasks.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Invoice Generator",
        desc: "Generate detailed invoices for your business or freelance work.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Password Generator",
        desc: "Create strong, secure passwords for your online accounts.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Online Code Formatter",
        desc: "Format your code for better readability and organization.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
  {
    title: "URL Utilities",
    slug: "url-utilities",
    tools: [
      {
        title: "QR Code Generator",
        desc: "Generate QR codes to quickly share URLs.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Analytics Dashboard",
        desc: "Monitor and analyze traffic for your shortened URLs.",
        href: "https://free-url.short360s.com/stats",
      },
      {
        title: "Shorten Your URL",
        desc: "Shorten long URLs into easy-to-share links.",
        href: "https://free-url.short360s.com/",
      },
    ],
  },
];
