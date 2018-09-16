set names utf8;
drop database if exists lg;
create database lg charset=utf8;
use lg;

#用户表
create table lg_user(
    uid int primary key auto_increment,
    uname  varchar(32),          #用户名
    upwd    varchar(32),         #密码
    uemail  varchar(64),         #电子邮箱
    uphone  varchar(16)         #手机号

);
insert into lg_user values
(null,"test","123456","123456@qq.com","15986935007");

#mp3表
create table lg_mp3(
    mid int primary key auto_increment,
    role    varchar(32),        #角色名
    sing    varchar(32),        #歌曲名
    sm      varchar(128),       #小图路径
    md      varchar(128),       #中图路径
    singUrl varchar(128)       #歌曲路径
);
insert into lg_mp3 values
(null,"龙曦大陆","传说","img/05-seeinghearing/mp3/disc1.png",
	"img/05-seeinghearing/mp3/mbg1.jpg","audio/光年之外.mp3"),
(null,"珑夏","命运","img/05-seeinghearing/mp3/disc2.png",
	"img/05-seeinghearing/mp3/mbg2.jpg","audio/平凡之路.mp3"),
(null,"傀光","灵魂","img/05-seeinghearing/mp3/disc3.png",
	"img/05-seeinghearing/mp3/mbg3.jpg","audio/意外.mp3"),
(null,"伽娜","复仇","img/05-seeinghearing/mp3/disc4.png",
	"img/05-seeinghearing/mp3/mbg4.jpg","audio/我的未来不是梦.mp3"),
(null,"孤月城","救赎","img/05-seeinghearing/mp3/disc5.png",
	"img/05-seeinghearing/mp3/mbg5.jpg","audio/光年之外.mp3"),
(null,"基茨","plan B","img/05-seeinghearing/mp3/disc6.png",
	"img/05-seeinghearing/mp3/mbg6.jpg","audio/意外.mp3"),
(null,"莎萝娅","萤光","img/05-seeinghearing/mp3/disc7.png",
	"img/05-seeinghearing/mp3/mbg7.jpg","audio/我的未来不是梦.mp3");

#轮播图片
create table lg_carousel(
    cid int primary key auto_increment,
    img    varchar(128),
    title    varchar(128)
);
insert into lg_carousel values
(null,"img/01-message/banner1.jpg","轮播广告图片1"),
(null,"img/01-message/banner2.jpg","轮播广告图片2"),
(null,"img/01-message/banner3.jpg","轮播广告图片3");

#公告信息
create table lg_message(
    mid         int primary key auto_increment,
    category    varchar(16),
    title       varchar(128),
    mtime       bigint(20),
    href        varchar(128)
);
insert into lg_message values
(null,"新闻","10月19日更新公告","1508284800000","#"),
(null,"新闻","10月12日更新公告","1506556800000","#"),
(null,"新闻","9月28日开服公告","1506556800000","#"),
(null,"新闻","9月28日延迟开服至22:00","1506470400000","#"),
(null,"新闻","9月28日更新公告","1505865600000","#"),
(null,"新闻","9月21日更新公告","1505865600000","#"),
(null,"新闻","9月7日更新及新版本预告","1504656000000","#"),
(null,"公告","10月19日更新公告","1508284800000","#"),
(null,"公告","10月12日更新公告","1507680000000","#"),
(null,"公告","9月28日延迟开服至22:00","1506556800000","#"),
(null,"公告","9月21日更新公告","1505865600000","#"),
(null,"公告","9月7日更新及新版本预告","1504656000000","#"),
(null,"公告","8月31日更新公告","1504051200000","#"),
(null,"公告","8月24日维护更新公告","1503446400000","#"),
(null,"公告","8月17日更新公告","1502841600000","#"),
(null,"媒体","腾讯游戏评测：爽到爆又虐到哭的国产动作佳作","1490313600000","#"),
(null,"媒体","关于三测保送资格的激活通知","1488844800000","#"),
(null,"媒体","173独家试玩：子弹时间逆天改命","1478217600000","#"),
(null,"媒体","爱玩网评测：超快感无锁定的动作新游","1478217600000","#"),
(null,"媒体","制作人专访：公会战提供不一样的团队PVP体验","1477440000000","#"),
(null,"顶部","三石精选.品质浴巾30天包退换","1477440000000","#"),
(null,"尾部","荒凉**** 的凝冰项链 装备洗练成功获得属性","1490313600000",null),
(null,"尾部","苍之**** 的碎玉裤子 注灵到13","1495929600000",null),
(null,"尾部","冥神**** 的凝冰戒指 装备洗练成功获得属性","1496246400000",null),
(null,"尾部","酱酱**** 的断浪耳环 装备升星到6星成功","1498838400000",null),
(null,"尾部","银狐**** 的凝冰手镯 装备洗练成功获得属性","1494838400000",null),
(null,"尾部","秋月**** 的炎魔护腿 装备洗练成功获得属性","1493438400000",null),
(null,"尾部","堇年**** 的炎魔战靴 装备洗练成功获得属性","1498238400000",null),
(null,"尾部","那一**** 的忍武（衣服） 时装染色成功","1498238400000",null),
(null,"尾部","萌丶**** 的断浪戒指 装备洗练成功获得属性","149538400000",null),
(null,"尾部","六月**** 的断浪项链 装备升星到6星成功","1496638400000",null),
(null,"尾部","寒梅**** 的断浪耳环 装备洗练成功获得属性","1438334400000",null),
(null,"尾部","叶央**** 的凝冰戒指 装备洗练成功获得属性","1508838400000",null),
(null,"尾部","若问**** 的凝冰项链 装备升星到6星成功","1500038400000",null),
(null,"尾部","绝版**** 的碎玉裤子 打造成功获得","1408345410000",null),
(null,"尾部","缘来**** 的炎魔护肩 装备洗练成功获得属性","1418438400000",null),
(null,"尾部","酱酱**** 的开天项链 装备洗练成功获得属性","1418238400000",null),
(null,"尾部","氵夜**** 的炎魔腰带 装备洗练成功获得属性","1413138400000",null),
(null,"尾部","桃花**** 的炎魔腰带 装备洗练成功获得属性","1411474400000",null);






















