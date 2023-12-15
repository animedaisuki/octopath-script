auto();
//截屏权限请求
if (!requestScreenCapture(true)) {
  toast("请求截图失败！");
  exit();
}
//载入图片
var pic = images.read("/storage/emulated/0/checkPic/endpic1.jpg");
var picS = images.read("/storage/emulated/0/checkPic/startpic1.jpg");
var cat = images.read("/storage/emulated/0/checkPic/catpic1.jpg");
var rcat = images.read("/storage/emulated/0/checkPic/redcat1.png");
var ycat = images.read("/storage/emulated/0/checkPic/ycat.png");
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg");
var cancel = images.read("/storage/emulated/0/checkPic/cancelpic.jpg");
var pet = images.read("/storage/emulated/0/checkPic/petLv.jpg");

if (!pic || !picS || !cat || !rcat || !ycat || !halt || !cancel) {
  toastLog("缺少图片，\n请检查checkPic文件夹！");
  exit();
}

var key = 1;
var x = 0; //识别高于16:9的屏幕
var x1 = 0;

//n*1080等屏幕的适配工作，包括异形屏
var testpic = captureScreen();
if (testpic) {
  toastLog(
    "你的分辨率为： " + testpic.getWidth() + " * " + testpic.getHeight()
  );
  if (testpic.getWidth() < 1920 || testpic.getHeight() != 1080) {
    sleep(1000);
    toastLog("你的手机分辨率暂时不匹配当前版本的脚本!");
    sleep(500);
    toastLog("结束脚本运行。");
    exit();
  }
  if (testpic.getWidth() != 1920) {
    //创建储存
    //var storage = storages.create("DpiCompensationValue");
    init();
    //x= (testpic.getWidth()-1920)/2-1;
  }
} else {
  toastLog("测试截图失败，\n已退出脚本,请查看日志。");
  exit();
}
//testpic.recycle();
//main----------------------------------------------
toastLog("开始执行脚本。");
var mapoptions = [
  "18、lv94 神界 -享欲の砂楼",
  "17、lv93 聖火神の祠 -巡礼の試練",
  "16、lv92 彼岸の橋",
  "15、lv88 辺獄・フェニスの門",
  "14、Lv86 辺獄・ホルンブルグ城",
  "13、辺獄・エドラス城",
  "12、Lv78 辺獄・ガイスト峡谷-南",
  "11、Lv70 热腾の泉窟",
  "10、Lv69 近海1の洞穴",
  "09、Lv68 授富の砂宮",
  "08、Lv68 旧ヘルミニア邸",
  "07、Lv67 針柱の洞",
  "06、Lv67 イ・チルロ崖道",
  "05、Lv66 原初の洞窟",
  "04、Lv66 ウォルド砦跡",
  "03、Lv65 グランポート地下水道",
  "02、Lv64 スフラタルジャ-宮殿-",
  "01、Lv63 タイタス大聖堂地下",
];
var mapflag = dialogs.multiChoice("请选择要刷的地图：", mapoptions);

if (mapflag >= 0) {
  toastLog("您选择的是：\n" + mapoptions[mapflag]);
} else {
  toastLog("您取消了选择。");
}

var maptotalnumb = 18;
var mapcase = maptotalnumb - mapflag;
//toastLog(mapcase);
//sleep(1000);
//xpedia XZ2 补偿制x=120

//------------------------------------------------------
var mosteroptions = [
  "3、只杀普通怪。（仅刷素材）",
  "2、只杀猫。（仅刷经验）",
  "1、杀猫和普通怪。（刷经验和素材）",
];
var mosterflag = dialogs.multiChoice("请选择要刷的怪：", mosteroptions);

if (mosterflag >= 0) {
  toast("您选择的是：\n" + mosteroptions[mosterflag]);
  sleep(1500);
} else {
  toast("您取消了选择。");
  sleep(1500);
}

var mostertotalnumb = 3;
var mostercase = mostertotalnumb - mosterflag;

//------------------------------------------------------
//18、lv94 神界 -享欲の砂楼
if (mapcase == 18) {
  var goX = 859 * key + x;
  var goY = 270 * key;
  var backX = 678 * key + x;
  var backY = 916 * key;
}

//17、lv93 聖火神の祠 -巡礼の試練
if (mapcase == 17) {
  var goX = 1306 * key + x;
  var goY = 190 * key;
  var backX = 911 * key + x;
  var backY = 777 * key;
}

//16、lv92 彼岸の橋
if (mapcase == 16) {
  var goX = 1410 * key + x;
  var goY = 750 * key;
  var backX = 560 * key + x;
  var backY = 330 * key;
}

//15、lv88辺獄・フェニスの門
// if (mapcase == 15) {
//   var goX = 1400 * key + x;
//   var goY = 560 * key;
//   var backX = 1015 * key + x;
//   var backY = 590 * key;
// }
if (mapcase == 15) {
  var goX = 606 * key + x;
  var goY = 840 * key;
  var backX = 388 * key + x;
  var backY = 598 * key;
}

//14、lv86辺獄・ホルンブルグ城
if (mapcase == 14) {
  var goX = 1090 * key + x;
  var goY = 250 * key;
  var backX = 900 * key + x;
  var backY = 830 * key;
}

//13、辺獄・エドラス城
if (mapcase == 13) {
  var goX = 699 * key + x;
  var goY = 632 * key;
  var backX = 1281 * key + x;
  var backY = 587 * key;
}

//12、lv78辺獄・ガイスト峡谷-南
if (mapcase == 12) {
  var goX = 510 * key + x;
  var goY = 310 * key;
  var backX = 750 * key + x;
  var backY = 900 * key;
}

//11、lv70热腾の泉窟
if (mapcase == 11) {
  var goX = 1380 * key + x;
  var goY = 180 * key;
  var backX = 1330 * key + x;
  var backY = 890 * key;
}
//10、lv69近海1の洞穴
if (mapcase == 10) {
  var goX = 460 * key + x;
  var goY = 750 * key;
  var backX = 1250 * key + x;
  var backY = 540 * key;
}
//9、lv68授富の砂宮
if (mapcase == 9) {
  var goX = 1300 * key + x;
  var goY = 185 * key;
  var backX = 915 * key + x;
  var backY = 860 * key;
}
//8、lv68旧ヘルミニア邸
if (mapcase == 8) {
  var goX = 605 * key + x;
  var goY = 270 * key;
  var backX = 1345 * key + x;
  var backY = 760 * key;
}

//7、lv67針柱の洞
if (mapcase == 7) {
  var goX = 610 * key + x;
  var goY = 280 * key;
  var backX = 570 * key + x;
  var backY = 870 * key;
}

//6、lv67イ・チルロ崖道
if (mapcase == 6) {
  var goX = 1265 * key + x;
  var goY = 915 * key;
  var backX = 1370 * key + x;
  var backY = 525 * key;
}

//5、lv66原初の洞窟
if (mapcase == 5) {
  var goX = 510 * key + x;
  var goY = 220 * key;
  var backX = 400 * key + x;
  var backY = 840 * key;
}

//4、lv66ウォルド砦跡
if (mapcase == 4) {
  var goX = 1130 * key + x;
  var goY = 675 * key;
  var backX = 770 * key + x;
  var backY = 185 * key;
}

//3、lv65グランポート地下水道
if (mapcase == 3) {
  var goX = 480 * key + x;
  var goY = 490 * key;
  var backX = 1400 * key + x;
  var backY = 640 * key;
}

//2、lv64スフラタルジャ-宮殿-
if (mapcase == 2) {
  var goX = 540 * key + x;
  var goY = 340 * key;
  var backX = 1255 * key + x;
  var backY = 340 * key;
}

//1、lv63タイタス大聖堂地下
if (mapcase == 1) {
  var goX = 840 * key + x;
  var goY = 420 * key;
  var backX = 680 * key + x;
  var backY = 920 * key;
}

// toastLog(goX + "," + goY + "," + backX + "," + backY);
// sleep(1000);

var mapX = 1700 * key + x;
var mapY = 180 * key;
var turnX = 1140 * key + x1;
var turnY = 1000 * key;
var boostX = 1310 * key + x1;
var boostY = 1000 * key;
var attackX = 1660 * key + x1;
var attackY = 1000 * key;
var cancelX = 1840 * key + x;
var cancelY = 40 * key;

//识别起始点
var startX = 777 * key + x1;
var startY = 949 * key;
var endX = 1409 * key + x;
var endY = 248 * key;
var catX = 100 * key + x;
var catY = 560 * key;
var rcatX = 408 * key + x;
var rcatY = 736 * key;
var haltX = 98 * key + x;
var haltY = 954 * key;
var cancelPicX = 1830 * key + x;
var cancelPicY = 16 * key;
var runX = 808 * key + x1;
var runY = 970 * key;
var totalTime = 3;
var flag = true;
var i = 0;
var sum = 0;
var catnum = 0;
var totalBattle = 0;
var checkCatTime = 2500;
var mao40w = 0; //40w
var mao30w = 0; //30w
var mao10w = 0; //10w
var bigMapX = 1280 * key + x1;
var bigMapY = 940 * key;
var cancelX = 1858 * key + x;
var cancelY = 40 * key;
var okX = 960 * key + x;
var okY = 730 * key;
//----------------------------------------------
while (1) {
  i = 0;
  toastLog("flag :"+flag);
  //移动角色
  if (checkStanding()) {
    toast('standing');
    playerMove(flag);
    flag = !flag;
    //toastLog("角色开始遇敌");
  }
  //toastLog("flag :"+flag);
  sleep(2000);

  while (i < totalTime) {
    sleep(3000);
    //toastLog("开始检测");

    if (checkCombat()) {
      //检测是否进入战斗
      //toastLog("战斗开始");
      totalBattle++;
      sleep(checkCatTime);

      var kind = findCat();
      //toastLog(kind);

      if (kind > 0) {
        if (mostercase == 3) {
          //log("是猫，跑!");
          click(runX, runY);
          sleep(2500);
        } else {
          catnum++;
          fightingStep(kind);
          log(
            "共遭遇 " +
              totalBattle +
              " 次战斗，\n其中 " +
              mao40w +
              " 只黑猫， " +
              mao30w +
              " 只蓝猫，\n " +
              mao10w +
              " 只黄猫。"
          );
        }
      } else {
        if (mostercase == 2) {
          //log("不是猫，跑!");
          click(runX, runY);
          sleep(2500);
        } else {
          fightingStep(kind);
          log(
            "共遭遇 " +
              totalBattle +
              " 次战斗，\n其中 " +
              mao40w +
              " 只黑猫， " +
              mao30w +
              " 只蓝猫，\n " +
              mao10w +
              " 只黄猫。"
          );
        }
      }
    } else {
      i++;
    }
  }
}
//-----------------------------------------------------

//角色移动----------------------------------------------
function playerMove(flag) {
  sleep(2000);
  openMap();
  sleep(3000);
  click(mapX, mapY); //点击地图

  if (flag) {
    sleep(3000);
    click(goX, goY); //去的目的地
    //flag = 0;
  } else {
    sleep(3000);
    click(backX, backY); //回的目的地
    //flag = 1;
  }
}
//---------------------------------------------------------------

//检测是否战斗进行中//----------------------------------------------
function checkCombat() {
  //截图判断
  var img = captureScreen();
  var Key = findImage(img, picS);

  //img.recycle();
  if (Key) {
    return 1; //继续战斗
  } else {
    return 0; //战斗结束
  }
}
//---------------------------------------------------------------

//检测是否战斗结束//------------------------------------------------
function checkEnd() {
  //截图判断
  var img = captureScreen();
  var Key = findImage(img, pic);

  //img.recycle();
  if (Key) {
    return 1; //战斗结算
  } else {
    return 0; //战斗继续
  }
}
//---------------------------------------------------------------

//检查是否停止移动//------------------------------------------------
function checkStanding() {
  //截图判断
  var img = captureScreen();
  // images.save(img, "/storage/emulated/0/captured/images/test.jpg");
  console.log("Halt image width: " + halt.getWidth());
  var Key = findImage(img, halt,{threshold: 0.5});
  console.log("Key:" + Key);
  
  //img.recycle();
  if (Key) {
    toast('characters are standing');
    console.log('characters are standing');
    return 1; //人物停住
  } else {
    toast('characters are moving');
    console.log('characters are moving');
    return 0; //人物没有停
  }
}
//---------------------------------------------------------------

//检查右上角的cancel键//-------------------------------------------
function checkCancelBotton() {
  //截图判断
  var img = captureScreen();
  var Key = findImage(img, cancel);
  //toastLog(Key);
  //img.recycle();
  if (Key) {
    return 1; //进去界面
  } else {
    return 0; //没有进去界面
  }
}
//---------------------------------------------------------------

function openMap() {
  click(bigMapX, bigMapY);
  toast("opened");
  sleep(3000);
  click(cancelX, cancelY);
  sleep(1000);
}

//(づ′▽`)づ打猫猫步骤//--------------------------------------------
function fightingStep(kind) {
  var round = 0;

  var turnX = 1130 * key + x1;
  var turnY = 970 * key;
  var boostX = 1295 * key + x1; //BP爆发
  var boostY = 970 * key;
  var attackX = 1645 * key + x1;
  var attackY = 970 * key;

  var role1X = 1660 * key + x1;
  var role1Y = 130 * key; //第1排人物位置
  var role2X = 1660 * key + x1;
  var role2Y = 350 * key; //第2排人物位置
  var role3X = 1660 * key + x1;
  var role3Y = 570 * key; //第3排人物位置
  var role4X = 1660 * key + x1;
  var role4Y = 790 * key; //第4排人物位置
  //var interval = 220 * key;

  var norattX = 1200 * key + x1; //normal attack
  var norattY = 270 * key;
  var skill1X = 1200 * key + x1;
  var skill1Y = 440 * key;
  var skill2X = 1200 * key + x1;
  var skill2Y = 610 * key;
  var skill3X = 1200 * key + x1;
  var skill3Y = 780 * key;
  var skill4X = 1200 * key + x1;
  var skill4Y = 950 * key;
  var chanpoX = 1700 * key + x1; //change position
  var chanpoY = 970 * key;
  //必杀技人物点击
  var onePunchX = 1042 * key + x1;
  var onePunchY = 128 * key;
  //必杀技按钮
  var OPConfirmX = 1410 * key + x1;
  var OPConfirmY = 789 * key;
  var bp2 = 330;
  var bp3 = 460;
  var bpm = 590;
  var tma = 800;
  var tmt = 20000;
  do {
    if (checkCombat()) {
      switch (round) {
        case 0:
          //toastLog("1回合");

          //kind=3 40w的猫
          if (kind == 3) {
            click(boostX, boostY);
            sleep(tma);
            click(attackX, attackY);
            mao40w++;
            sleep(tmt);
            round++;
            break;
          }
          //kind=2 30w的猫
          if (kind == 2) {
            click(boostX, boostY);
            sleep(tma);

            click(role1X, role1Y);
            sleep(tma);
            click(skill2X, skill2Y);
            sleep(tma);

            click(role3X, role3Y);
            sleep(tma);
            click(norattX, norattY);
            sleep(tma);

            click(role4X, role4Y);
            sleep(tma);
            click(skill3X, skill3Y);
            sleep(tma);
            click(attackX, attackY);
            mao30w++;
            sleep(tmt);
            round++;
            break;
          }
          //kind=1 10w的猫
          if (kind == 1) {
            click(boostX, boostY);
            sleep(tma);
            click(role1X, role1Y);
            sleep(tma);
            click(skill3X, skill3Y);
            sleep(tma);

            click(role3X, role3Y);
            sleep(tma);
            swipe(norattX, norattY, norattX + bp2, norattY, tma); //bp2
            sleep(tma);

            click(role4X, role4Y);
            sleep(tma);
            click(skill3X, skill3Y);
            sleep(tma);
            click(attackX, attackY);
            mao10w++;
            sleep(tmt);
            round++;
            break;
          }
          //普通怪，优先技能三，没蓝就普攻。
          else {
            click(role1X, role1Y);
            sleep(tma);
            click(onePunchX, onePunchY);
            sleep(tma);
            click(OPConfirmX, OPConfirmY);
            sleep(tma);
            sleep(tma);
            click(role2X,role2Y);
            sleep(tma);
            click(skill3X,skill3Y);
            sleep(tma);
            sleep(tma);
            click(boostX, boostY);
            sleep(tma);
            click(attackX, attackY);
            sleep(tmt);
            round++;
            break;
          }

        case 1:
          //toastLog("2回合");

          if (kind == 3) {
            //40W猫
            click(turnX, turnY);
            sleep(tma);
            click(boostX, boostY);
            sleep(tma);
            click(attackX, attackY);
            sleep(tmt);
            round++;
            break;
          }

          if (kind >= 1) {
            //30W猫 & 10W猫
            click(turnX, turnY);
            sleep(tma);
            click(role1X, role1Y);
            sleep(tma);
            click(chanpoX, chanpoY);
            sleep(tma);
            click(norattX, norattY);
            sleep(tma);
            click(role4X, role4Y);
            sleep(tma);
            click(chanpoX, chanpoY);
            sleep(tma);
            click(norattX, norattY);
            sleep(tma);

            click(boostX, boostY);
            sleep(tma);
            click(attackX, attackY);

            sleep(tmt);
            round++;
            break;
          }

          // 普通怪
          else {
            click(turnX, turnY);
            sleep(tma);

            click(boostX, boostY);
            sleep(tma);
            click(attackX, attackY);

            sleep(tmt);
            round++;
            break;
          }

        case 2:
          //toastLog("3回合");
          click(turnX, turnY);
          sleep(tma);
          click(boostX, boostY);
          sleep(tma);
          click(attackX, attackY);
          sleep(tmt);
          round++;
          break;

        default:
          //toastLog((round + 1) + "回合");
          click(turnX, turnY);
          sleep(tma);
          click(boostX, boostY);
          sleep(tma);
          click(attackX, attackY);
          sleep(15000);
          round++;
          break;
      }
    }
  } while (checkEnd() == 0);
  toastLog(
    "本次挂机至今，\n共杀：黑猫 " +
      mao40w +
      " 个，蓝猫 " +
      mao30w +
      " 个，\n黄猫 " +
      mao10w +
      " 个。"
  );
  click(960 * key + x, 540 * key);
  sleep(500);
  click(960 * key + x, 540 * key);
  sleep(500);
  for (var i = 8; i > 0; i--) {
    var img = captureScreen();
    var Key = findImage(img, pet);
    if (Key) {
      click(okX, okY);
      sleep(2000);
    } else {
      break;
    }
  }
  click(960 * key + x, 540 * key);
  sleep(3000);
}
//---------------------------------------------------------------

//识别猫----------------------------------------------------------
function findCat() {
  //截图判断
  var img = captureScreen();
  var Key = findImage(img, cat);
  var Key2 = findImage(img, rcat);
  var Key3 = findImage(img, ycat);

  if (Key3) {
    toastLog("猫品种：黑猫\n发现：阴间猫（40W猫）！"); //阴间猫
  }
  if (Key2) {
    toastLog("猫品种：蓝猫\n发现：大宝贝（30W猫）！"); //ブルジョワ別種
  } else if (Key) {
    toastLog("猫品种：黄猫\n发现：小可爱（10W猫）！"); //ブルジョワ
  } else {
    toastLog("发现：普通怪。");
  }

  img.recycle();
  if (Key3) {
    return 3; //发现黑猫（40W猫）
  }
  if (Key2) {
    return 2; //发现蓝猫（30W猫）
  } else if (Key) {
    return 1; //发现黄猫（10W猫）
  } else {
    return 0; //没有发现猫
  }
}
//---------------------------------------------------------------

//初始化//--------------------------------------------------------
function init() {
  //创建储存
  var storage = storages.create("DpiCompensationValue");
  //补偿值赋值
  if (storage.get("x") == null) {
    toastLog("先执行“DpiCompensation.js”完成初始化。");
    exit();
  } else {
    toastLog("检测到初始值开始赋值。");
    sleep(500);
    x = storage.get("x");
    x1 = storage.get("x1");
    toastLog("常规补偿值：x = " + x + "\n，战斗补偿值：x1 = " + x1);
    sleep(1000);
  }
}
//---------------------------------------------------------------
