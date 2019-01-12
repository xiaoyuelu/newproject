const remote = require('electron').remote;
const dialog = remote.dialog;

function onClick_OpenFile() {
    const label = document.getElementById('label');
    //显示打开文件对话框，并将选择的文件显示在页面上
    label.innerText = dialog.showOpenDialog({
        properties: ['openFile']
    })
}

function onClick_CustomOpenFile() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    // options.message = '打开我的文件';mac系统
    options.buttonLabel = '选择';
    options.defaultPath = '.';
    options.properties = ['openFile'];
    label.innerText = dialog.showOpenDialog(options);
}

function onClick_FileType() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.buttonLabel = '选择';
    options.defaultPath = '.';
    options.properties = ['openFile'];
    //指定特定的文件类型
    options.filters = [{
            name: '图像文件',
            extensions: ['jpg', 'png', 'gif']
        },
        {
            name: '视频文件',
            extensions: ['mkv', 'avi', 'mp4']
        },
        {
            name: '音频文件',
            extensions: ['mp3', 'wav']
        },
        {
            name: '所有文件',
            extensions: ['*']
        }
    ]
    label.innerText = dialog.showOpenDialog(options)
}

//Mac OS创建目录
function onClick_OpenAndCreateDirectory() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开目录';
    //createDirectory仅用于MAC OS
    options.properties = ['openDirectory', 'createDirectory'];
    label.innerText = dialog.showOpenDialog(options)

}

function onClick_MultiSelection() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    //添加多选属性和打开文件属性
    options.properties = ['openFile', 'multiSelections'];
    label.innerText = dialog.showOpenDialog(options);
}

function onClick_Callback() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.properties = ['openFile', 'multieSelections'];
    //指定回调函数，在回调函数中通过循环获取选择的多个文件和目录
    dialog.showOpenDialog(options, (filePaths) => {
        for (var i = 0; i < filePaths.length; i++) {
            label.innerText += filePaths[i] + '\r\n';
        }
    });
}