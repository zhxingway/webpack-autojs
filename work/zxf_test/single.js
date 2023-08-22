

let bExist = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").exists();
toast(bExist);
log(bExist);

let object = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").find();
toast(object.nonEmpty());
log(object.nonEmpty());
