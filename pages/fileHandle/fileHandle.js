import {getPageContentHeight} from "../../manager/common";

Page({
    fs: wx.getFileSystemManager(),

    f5() {
        this.fs.readFile({
            filePath: `${wx.env.USER_DATA_PATH}/hutao.txt`,
            encoding: 'utf8',
            position: 0,
            success(res) {
                console.log(res.data)
            },
            fail(res) {
                console.error(res)
            }
        })
    },

    f4() {
        this.fs.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
            data: 'some text or arrayBuffer',
            encoding: 'utf8',
            success(res) {
                console.log(res)
            },
            fail(res) {
                console.error(res)
            }
        })
    },

    f2() {
        let that = this
        this.fs.saveFile({
            tempFilePath: this.data.tempFilePaths[0],
            success(res) {
                console.log("saveFile success===> ", res);
                that.setData({
                    tempFilePath: res.savedFilePath
                })
            }
        })
    },

    f3() {
        let that = this
        this.fs.getSavedFileList({
            success(res) {
                console.log(res.fileList)
                that.setData({
                    fileList: res.fileList
                })
            }
        })
    },

    f1(e) {
        wx.chooseImage({
            success: res => {
                console.log(res);
                let tempFilePaths = res.tempFilePaths;
                this.setData({
                    tempFilePaths: tempFilePaths
                })
            }
        })
    },

    data: {
        pageContentHeight: getPageContentHeight(),
    },

    onLoad: function (options) {

    },


});
