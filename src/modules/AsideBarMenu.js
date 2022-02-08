export default {
  sidebarMenu: [
    {
      type: "submenu",
      icon: "el-icon-folder-opened",
      title: "main",
      index: "1-2",
      items: [
        {
          type: "item-group",
          title: "",
          links: [
            {
              index: "/processingOrder",
              url: "/processingOrder",
              title: "Processing order",
              icon: "el-icon-s-order",
            },
          ],
        },
      ],
    },
    {
      type: "submenu",
      index: "1-3",
      icon: "el-icon-setting",
      title: "settings",
      items: [
        {
          type: "item-group",
          title: "",
          links: [
            {
              index: "/settings",
              url: "/settings",
              title: "settings",
              icon: "el-icon-truck",
            },
          ],
        },
      ],
    },
  ],
};
