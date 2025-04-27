// ==UserScript==
// @name         大工党课模拟点击
// @namespace    http://tampermonkey.net/
// @version      2025-04-27
// @description  可以模拟点击大工党课平台视频观看时每五分钟出现一次的弹窗
// @author       zzx
// @match        https://dlut.qiangguoxianfeng.com/*
// @icon         https://teach.dlut.edu.cn/images/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    setInterval(() => {
        const confirmButton = document.querySelector(
            ".el-message-box__btns .el-button--primary"
        );
        if (confirmButton) {
            setTimeout(() => {
                confirmButton.click();
            }, 500 + Math.random() * 1500);
        }
    }, 5000); 
})();
