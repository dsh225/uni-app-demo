import HttpRequest from '@/api/request';
import ApiConfig from '@/api-config';

//取得新增、编辑案卷页面的输入项配置
function getEditField(data){
    let url=ApiConfig.getEditDeploy;
    return HttpRequest.requestJsonPost(url,data)
}
//取得编辑案卷页面的案卷数据
function getNumber(params){
    let url=ApiConfig.getNumber;
    return HttpRequest.requestJsonPost(url,params)
}

//文件级编辑取得编辑案卷页面的案卷数据
function getEditFieldValue(params){
    let url=ApiConfig.getEditFieldValue;
    return HttpRequest.requestJsonPost(url,params)
}

//保存案卷（新建，修改，删除）
function SaveFile(params){
    let url = ApiConfig.SaveDossier;
    return HttpRequest.requestJsonPost(url,params)
}

//取当前案卷列表
function FileSearch(params){
    let url=ApiConfig.FileDossier;
    return HttpRequest.requestJsonPost(url,params)
}

//新增案卷列表
function inheritDataFromAnJuan(params){
    let url=ApiConfig.inheritDataFromAnJuan;
    return HttpRequest.requestJsonPost(url,params)
}
//获取项目编号
function findByFond(ID){
    let url = ApiConfig.findByFond;
    return HttpRequest.requestJsonPost(url,ID)
}

// 断点续传
// 预备上传
function prepareUpload(data,a,b){
    let url = ApiConfig.getLoaderServlet+'?action=' + a + '&clientId=' + b;
    return HttpRequest.upLoadFormPost(url,data)
}
// 保存新增数据
function saveLoundTitle(params){
    let url = ApiConfig.SaveCloudTree;
    return HttpRequest.requestJsonPost(url,params)
}
// crc验证
function verifyCrcOfUncheckedPart(data,a,b,c){
    let url = ApiConfig.getLoaderServlet+'?action=verifyCrcOfUncheckedPart&fileId=' + a + '&crc=' + b+ '&clientId=' + c
    return HttpRequest.upLoadFormPost(url,data)
}
// 删除列表数据
function deleList(params){
    let url = ApiConfig.deleList;
    return HttpRequest.requestJsonPost(url,params)
}
// 上传主体
function doneUpload(data,a,b,c){
    let url = ApiConfig.getAsyncServlet+'?action=upload&fileId=' + a + '&crc=' + b+ '&clientId=' + c
    return HttpRequest.upLoadFormPost(url,data)
}
// 取得指定云盘文件夹的上传任务列表
function getUploadFilesOfCloud(data,a,b){
    let url = ApiConfig.getLoaderServlet+'?action=getUploadFilesOfCloud&clientId=' + a + '&cloudDirId=' + b
    return HttpRequest.upLoadFormPost(url,data)
}
// 获取云盘文件路径
function getUploadUrl(params){
    let url = ApiConfig.getCloudUrl;
    return HttpRequest.requestJsonPost(url,params)
}
// 取消上传
function searchUpload(params, a){
    let url = ApiConfig.getLoaderServlet+'?action=cancelFiles&clientId=' + a;
    return HttpRequest.upLoadFormPost(url,params)
}
//清除文件
function clearFiles(params, a){
    let url = ApiConfig.getLoaderServlet+'?action=clearFiles&clientId=' + a;
    return HttpRequest.upLoadFormPost(url,params)
}
//获取电子原文列表
function getOriginals(params){
    let url=ApiConfig.getOriginals;
    return HttpRequest.requestJsonPost(url,params)
}

//下载缩略图
function downloadThumbnail(params,a){
    let url = ApiConfig.downloadThumbnail+'?originalGuid=' + a;
    return HttpRequest.upLoadFormPost(url,params)
};

// 双击浏览原生pdf
function displayPdf(params,a,b){
    let url = ApiConfig.displayPdfFile+'?originalGuid=' + a + '&preview=' + b;
    return HttpRequest.requestBlobPost(url,params)
};

// 双击浏览转化pdf
function displayToPdf(params,a,b){
    let url = ApiConfig.displayToPdfFile+'?originalGuid=' + a + '&preview=' + b;;
    return HttpRequest.requestBlobPost(url,params)
};

// 删除挂接原文
function deletePdf(params){
    let url = ApiConfig.displayToPdfDelete;
    return HttpRequest.requestJsonPost(url,params)
}
//分类号
function getCategoryNumbers(param){
    let url = ApiConfig.getCategoryNumbers;
    return HttpRequest.requestJsonPost(url,param)
}
//全宗号
function  searchFondsForInput(name){
    let url = ApiConfig.searchFondsForInput;
    return HttpRequest.requestJsonPost(url,name)
}
//是否为项目公司
function isTopCompany(ID){
    let url = ApiConfig.isTopCompany;
    return HttpRequest.requestJsonPost(url,ID)
}
// 双击浏览原生pdf
function displayPdfs(params){
    let url = ApiConfig.displayPdfFiles;
    return HttpRequest.requestBlobPost1(url,params)
};
// 获取用户信息
function getUserUrl(params){
    let url = ApiConfig.getUserUrl;
    return HttpRequest.requestJsonPost(url,params)
}
// 获取云盘目录
function gettersitle(params){
    let url = ApiConfig.gettersitle;
    return HttpRequest.requestJsonPost(url,params)
}
// 获取列表信息
function getLoundList(params){
    let url = ApiConfig.LoundList;
    return HttpRequest.requestJsonPost(url,params)
}
// 获取文件服务器是否可用
function getFileServiceStatus(data) {
    let url = ApiConfig.getFileServerStatus;
    return HttpRequest.requestJsonPost1(url,data)
}
// 下载
function getUploadUp(params){
    let url = ApiConfig.getCloudUpUrl;
    return HttpRequest.requestBlobGet1(url,params)
}
// 获取文件服务器地址
function getFileService(data) {
    let url = ApiConfig.serviceUrl;
    return HttpRequest.requestJsonPost(url,data)
}
// 删除数
function DeleTile(params){
    let url = ApiConfig.DeleteTile;
    return HttpRequest.requestJsonPost(url,params)
}
// 获取数的标题
function getLoundUrlTitle(params){
    let url=ApiConfig.getLoundUrl;
    return HttpRequest.requestJsonPost(url,params)
}
// 列表重命名
function ListRnmae(params){
    let url = ApiConfig.CloudListRname;
    return HttpRequest.requestJsonPost(url,params)
}
// 双击浏览转化pdf
function displayToPdfs(params){
    let url = ApiConfig.displayToPdfFiles;
    return HttpRequest.requestBlobPost1(url,params)
};

let Service = {
    getEditField,
    getNumber,
    getUploadFilesOfCloud,
    getEditFieldValue,
    SaveFile,
    FileSearch,
    inheritDataFromAnJuan,
    findByFond,
    prepareUpload,
    saveLoundTitle,
    verifyCrcOfUncheckedPart,
    doneUpload,
    searchUpload,
    getLoundUrlTitle,
    clearFiles,
    getFileServiceStatus,
    getLoundList,
    getUserUrl,
    deleList,
    ListRnmae,
    getFileService,
    gettersitle,
    getOriginals,
    DeleTile,
    downloadThumbnail,
    displayPdf,
    getUploadUp,
    displayToPdf,
    deletePdf,
    getCategoryNumbers,
    searchFondsForInput,
    isTopCompany,
    displayPdfs,
    displayToPdfs,
    getUploadUrl,
}
export default Service