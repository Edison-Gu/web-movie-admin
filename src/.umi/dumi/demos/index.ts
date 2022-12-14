// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'components-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/person/web-movie-admin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

    var _Footer = _interopRequireDefault(await import("@/components/Footer"));

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      return /*#__PURE__*/_react.default.createElement(_Footer.default, null);
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import Footer from '@/components/Footer';\nimport React from 'react';\n\nexport default () => <Footer />;"}},"dependencies":{"react":{"version":"17.0.2"}},"background":"#f0f2f5","identifier":"components-demo"},
  },
  'components-demo-1': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/person/web-movie-admin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

    var _HeaderDropdown = _interopRequireDefault(await import("@/components/HeaderDropdown"));

    var _antd = await import("antd");

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      var menuHeaderDropdown = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
        selectedKeys: []
      }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "center"
      }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "settings"
      }, "\u4E2A\u4EBA\u8BBE\u7F6E"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "logout"
      }, "\u9000\u51FA\u767B\u5F55"));

      return /*#__PURE__*/_react.default.createElement(_HeaderDropdown.default, {
        overlay: menuHeaderDropdown
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, "hover \u5C55\u793A\u83DC\u5355"));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import HeaderDropdown from '@/components/HeaderDropdown';\nimport { Button, Menu } from 'antd';\nimport React from 'react';\n\nexport default () => {\n  const menuHeaderDropdown = (\n    <Menu selectedKeys={[]}>\n      <Menu.Item key=\"center\">????????????</Menu.Item>\n      <Menu.Item key=\"settings\">????????????</Menu.Item>\n      <Menu.Divider />\n      <Menu.Item key=\"logout\">????????????</Menu.Item>\n    </Menu>\n  );\n  return (\n    <HeaderDropdown overlay={menuHeaderDropdown}>\n      <Button>hover ????????????</Button>\n    </HeaderDropdown>\n  );\n};"}},"dependencies":{"antd":{"version":"4.23.0","css":"antd/dist/antd.css"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"background":"#f0f2f5","identifier":"components-demo-1"},
  },
  'components-demo-2': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/person/web-movie-admin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

    var _HeaderSearch = _interopRequireDefault(await import("@/components/HeaderSearch"));

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      return /*#__PURE__*/_react.default.createElement(_HeaderSearch.default, {
        placeholder: "\u7AD9\u5185\u641C\u7D22",
        defaultValue: "umi ui",
        options: [{
          label: 'Ant Design Pro',
          value: 'Ant Design Pro'
        }, {
          label: 'Ant Design',
          value: 'Ant Design'
        }, {
          label: 'Pro Table',
          value: 'Pro Table'
        }, {
          label: 'Pro Layout',
          value: 'Pro Layout'
        }],
        onSearch: function onSearch(value) {
          console.log('input', value);
        }
      });
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import HeaderSearch from '@/components/HeaderSearch';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <HeaderSearch\n      placeholder=\"????????????\"\n      defaultValue=\"umi ui\"\n      options={[\n        { label: 'Ant Design Pro', value: 'Ant Design Pro' },\n        {\n          label: 'Ant Design',\n          value: 'Ant Design',\n        },\n        {\n          label: 'Pro Table',\n          value: 'Pro Table',\n        },\n        {\n          label: 'Pro Layout',\n          value: 'Pro Layout',\n        },\n      ]}\n      onSearch={(value) => {\n        console.log('input', value);\n      }}\n    />\n  );\n};"}},"dependencies":{"react":{"version":"17.0.2"}},"background":"#f0f2f5","identifier":"components-demo-2"},
  },
  'components-demo-3': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/person/web-movie-admin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

    var _NoticeIcon = _interopRequireDefault(await import("@/components/NoticeIcon/NoticeIcon"));

    var _antd = await import("antd");

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      var list = [{
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '???????????? 14 ????????????',
        datetime: '2017-08-09',
        type: 'notification'
      }, {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '???????????? ????????? ????????????????????????',
        datetime: '2017-08-08',
        type: 'notification'
      }];
      return /*#__PURE__*/_react.default.createElement(_NoticeIcon.default, {
        count: 10,
        onItemClick: function onItemClick(item) {
          _antd.message.info("".concat(item.title, " \u88AB\u70B9\u51FB\u4E86"));
        },
        onClear: function onClear(title, key) {
          return _antd.message.info('?????????????????????');
        },
        loading: false,
        clearText: "\u6E05\u7A7A",
        viewMoreText: "\u67E5\u770B\u66F4\u591A",
        onViewMore: function onViewMore() {
          return _antd.message.info('?????????????????????');
        },
        clearClose: true
      }, /*#__PURE__*/_react.default.createElement(_NoticeIcon.default.Tab, {
        tabKey: "notification",
        count: 2,
        list: list,
        title: "\u901A\u77E5",
        emptyText: "\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5",
        showViewMore: true
      }), /*#__PURE__*/_react.default.createElement(_NoticeIcon.default.Tab, {
        tabKey: "message",
        count: 2,
        list: list,
        title: "\u6D88\u606F",
        emptyText: "\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F",
        showViewMore: true
      }), /*#__PURE__*/_react.default.createElement(_NoticeIcon.default.Tab, {
        tabKey: "event",
        title: "\u5F85\u529E",
        emptyText: "\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E",
        count: 2,
        list: list,
        showViewMore: true
      }));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import NoticeIcon from '@/components/NoticeIcon/NoticeIcon';\nimport { message } from 'antd';\nimport React from 'react';\n\nexport default () => {\n  const list = [\n    {\n      id: '000000001',\n      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',\n      title: '???????????? 14 ????????????',\n      datetime: '2017-08-09',\n      type: 'notification',\n    },\n    {\n      id: '000000002',\n      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',\n      title: '???????????? ????????? ????????????????????????',\n      datetime: '2017-08-08',\n      type: 'notification',\n    },\n  ];\n  return (\n    <NoticeIcon\n      count={10}\n      onItemClick={(item) => {\n        message.info(`${item.title} ????????????`);\n      }}\n      onClear={(title: string, key: string) => message.info('?????????????????????')}\n      loading={false}\n      clearText=\"??????\"\n      viewMoreText=\"????????????\"\n      onViewMore={() => message.info('?????????????????????')}\n      clearClose\n    >\n      <NoticeIcon.Tab\n        tabKey=\"notification\"\n        count={2}\n        list={list}\n        title=\"??????\"\n        emptyText=\"????????????????????????\"\n        showViewMore\n      />\n      <NoticeIcon.Tab\n        tabKey=\"message\"\n        count={2}\n        list={list}\n        title=\"??????\"\n        emptyText=\"????????????????????????\"\n        showViewMore\n      />\n      <NoticeIcon.Tab\n        tabKey=\"event\"\n        title=\"??????\"\n        emptyText=\"????????????????????????\"\n        count={2}\n        list={list}\n        showViewMore\n      />\n    </NoticeIcon>\n  );\n};"}},"dependencies":{"antd":{"version":"4.23.0","css":"antd/dist/antd.css"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"background":"#f0f2f5","identifier":"components-demo-3"},
  },
};
