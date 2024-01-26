﻿// Based on the file: hyph-bg.tex
// Created by: Georgi Boshnakov <Georgi.Boshnakov@manchester.ac.uk>
// License: LGPL
Hyphenator.languages['bg'] = {
	leftmin : 2,
	rightmin : 2,
	specialChars : "нъагдежзийклмопрстуфхцчшщьюябв_",
	patterns : {
		3 : "н4юн4ъ1д11е11ж11з11и11й11к11л11м11н11о11п11р11с11т11у11ф11х11ц11ч11ш11щ11ъ10ь01ю11я1б4аб4еб4иб4об4уб4ъб4юб4яв4ав4ев4ив4ов4ув4ъв4юв4яг4аг4ег4иг4ог4уг4ъг4юг4яд4ад4ед4ид4од4уд4ъд4юд4яж4аж4еж4иж4ож4уж4ъж4юж4яз4аз4ез4из4оз4уз4ъз4юз4яй4ай4ей4ий4ой4уй4ъй4юй4як4ак4ек4ик4ок4ук4ък4юк4ял4ал4ел4ил4ол4ул4ъл4юл4ям4ам4ем4им4ом4ум4ъм4юм4ян4ан4ен4ин4он4у1в11г1н4яп4ап4еп4ип4оп4уп4ъп4юп4яр4ар4ер4ир4ор4ур4ър4юр4яс4ас4ес4ис4ос4ус4ъс4юс4ят4ат4ет4ит4от4ут4ът4ют4яф4аф4еф4иф4оф4уф4ъф4юф4ях4ах4ех4их4ох4ух4ъх4юх4яц4ац4ец4иц4оц4уц4ъц4юц4яч4ач4еч4ич4оч4уч4ъч4юч4яш4аш4еш4иш4ош4уш4ъш4юш4ящ4ащ4ещ4ищ4ощ4ущ4ъщ4ющ4яь4аь4еь4иь4оь4уь4ъь4юь4яь4ьщ4ьш4ьч4ьц4ьх4ьф4ьт4ьс4ьр4ьп4ьн4ьм4ьл4ьк4ьй4ьз4ьж4ьд4ьг4ьв4ьб4ь1б11а1",
		4 : "й4щщй4щшй4щчй4щцй4щхй4щфй4щтй4щсй4щрй4щпй4щнй4щмй4щлй4щкй4щйй4щзй4щжй4щдй4щгй4щвй4щбй4шщй4шшй4шчй4шцй4шхй4шфй4штй4шсй4шрй4шпй4шнй4шмй4шлй4шкй4шйй4шзй4шжй4шдй4шгй4швй4шбй4чщй4чшй4чч3д4жй4чцй4чхй4чфй4чтй4чсй4чрй4чпй4чнй4чмй4члй4чкй4чйй4чзй4чжй4чдй4чгй4чвй4чбй4цщй4цшй4цчй4ццй4цхй4цфй4цтй4цсй4црй4цпй4цнй4цмй4цлй4цкй4цйй4цзй4цжй4цдй4цгй4цвй4цбй4хщй4хшй4хчй4хцй4ххй4хфй4хтй4хсй4хрй4хпй4хнй4хмй4хлй4хкй4хйй4хзй4хжй4хдй4хгй4хвй4хбй4фщй4фшй4фчй4фцй4фхй4ффй4фтй4фсй4фрй4фпй4фнй4фмй4флй4фкй4фйй4фзй4фжй4фдй4фгй4фвй4фбй4тщй4тшй4тчй4тцй4тхй4тфй4ттй4тсй4трй4тпй4тнй4тмй4тлй4ткй4тйй4тзй4тжй4тдй4тгй4твй4тбй4сщй4сшй4счй4сцй4схй4сфй4стй4ссй4срй4спй4снй4смй4слй4скй4сйй4сзй4сжй4сдй4сгй4свй4сбй4рщй4ршй4рчй4рцй4рхй4рфй4ртй4рсй4ррй4рпй4рнй4рмй4рлй4ркй4рйй4рзй4ржй4рдй4ргй4рвй4рбй4пщй4пшй4пчй4пцй4пхй4пфй4птй4псй4прй4ппй4пнй4пмй4плй4пкй4пйй4пзй4пжй4пдй4пгй4пвй4пбй4нщй4ншй4нчй4нцй4нхй4нфй4нтй4нсй4нрй4нпй4ннй4нмй4нлй4нкй4нйй4нзй4нжй4ндй4нгй4нвй4нбй4мщй4мшй4мчй4мцй4мхй4мфй4мтй4мсй4мрй4мпй4мнй4ммй4млй4мкй4мйй4мзй4мжй4мдй4мгй4мвй4мбй4лщй4лшй4лчй4лцй4лхй4лфй4лтй4лсй4лрй4лпй4лнй4лмй4ллй4лкй4лйй4лзй4лжй4лдй4лгй4лвй4лбй4кщй4кшй4кчй4кцй4кхй4кфй4ктй4ксй4крй4кпй4кнй4кмй4клй4ккй4кйй4кзй4кжй4кдй4кгй4квй4кбй4йщй4йшй4йчй4йцй4йхй4йфй4йтй4йсй4йрй4йпй4йнй4ймй4йлй4йкй4ййй4йзй4йжй4йдй4йгй4йвй4йбй4зщй4зшй4зчй4зцй4зхй4зфй4зтй4зсй4зрй4зпй4знй4змй4злй4зкй4зйй4ззй4зжй4здй4згй4звй4збй4жщй4жшй4жчй4жцй4жхй4жфй4жтй4жсй4жрй4жпй4жнй4жмй4жлй4жкй4жйй4жзй4жжй4ждй4жгй4жвй4жбй4дщй4дшй4дчй4дцй4дхй4дфй4дтй4дсй4дрй4дпй4днй4дмй4длй4дкй4дйй4дзй4джй4ддй4дгй4двй4дбй4гщй4гшй4гчй4гцй4гхй4гфй4гтй4гсй4грй4гпй4гнй4гмй4глй4гкй4гйй4гзй4гжй4гдй4ггй4гвй4гбй4вщй4вшй4вчй4вцй4вхй4вфй4втй4всй4врй4впй4внй4вмй4влй4вкй4вйй4взй4вжй4вдй4вгааа4аае4ааи4аао4аау4ааъ4ааю4аая4аеа4аее4аеи4аео4аеу4аеъ4аею4аея4аиа4аие4аии4аио4аиу4аиъ4аию4аия4аоа4аое4аои4аоо4аоу4аоъ4аою4аоя4ауа4ауе4ауи4ауо4ауу4ауъ4аую4ауя4аъа4аъе4аъи4аъо4аъу4аъъ4аъю4аъя4аюа4аюе4аюи4аюо4аюу4аюъ4аюю4аюя4аяа4аяе4аяи4аяо4аяу4аяъ4аяю4аяя4еаа4еае4еаи4еао4еау4еаъ4еаю4еая4ееа4еее4ееи4еео4ееу4ееъ4еею4еея4еиа4еие4еии4еио4еиу4еиъ4еию4еия4еоа4еое4еои4еоо4еоу4еоъ4еою4еоя4еуа4еуе4еуи4еуо4еуу4еуъ4еую4еуя4еъа4еъе4еъи4еъо4еъу4еъъ4еъю4еъя4еюа4еюе4еюи4еюо4еюу4еюъ4еюю4еюя4еяа4еяе4еяи4еяо4еяу4еяъ4еяю4еяя4иаа4иае4иаи4иао4иау4иаъ4иаю4иая4иеа4иее4иеи4иео4иеу4иеъ4иею4иея4ииа4иие4иии4иио4ииу4ииъ4иию4иия4иоа4иое4иои4иоо4иоу4иоъ4иою4иоя4иуа4иуе4иуи4иуо4иуу4иуъ4иую4иуя4иъа4иъе4иъи4иъо4иъу4иъъ4иъю4иъя4июа4июе4июи4июо4июу4июъ4июю4июя4ияа4ияе4ияи4ияо4ияу4ияъ4ияю4ияя4оаа4оае4оаи4оао4оау4оаъ4оаю4оая4оеа4оее4оеи4оео4оеу4оеъ4оею4оея4оиа4оие4оии4оио4оиу4оиъ4оию4оия4ооа4оое4оои4ооо4ооу4ооъ4оою4ооя4оуа4оуе4оуи4оуо4оуу4оуъ4оую4оуя4оъа4оъе4оъи4оъо4оъу4оъъ4оъю4оъя4оюа4оюе4оюи4оюо4оюу4оюъ4оюю4оюя4ояа4ояе4ояи4ояо4ояу4ояъ4ояю4ояя4уаа4уае4уаи4уао4уау4уаъ4уаю4уая4уеа4уее4уеи4уео4уеу4уеъ4уею4уея4уиа4уие4уии4уио4уиу4уиъ4уию4уия4уоа4уое4уои4уоо4уоу4уоъ4уою4уоя4ууа4ууе4ууи4ууо4ууу4ууъ4уую4ууя4уъа4уъе4уъи4уъо4уъу4уъъ4уъю4уъя4уюа4уюе4уюи4уюо4уюу4уюъ4уюю4уюя4уяа4уяе4уяи4уяо4уяу4уяъ4уяю4уяя4ъаа4ъае4ъаи4ъао4ъау4ъаъ4ъаю4ъая4ъеа4ъее4ъеи4ъео4ъеу4ъеъ4ъею4ъея4ъиа4ъие4ъии4ъио4ъиу4ъиъ4ъию4ъия4ъоа4ъое4ъои4ъоо4ъоу4ъоъ4ъою4ъоя4ъуа4ъуе4ъуи4ъуо4ъуу4ъуъ4ъую4ъуя4ъъа4ъъе4ъъи4ъъо4ъъу4ъъъ4ъъю4ъъя4ъюа4ъюе4ъюи4ъюо4ъюу4ъюъ4ъюю4ъюя4ъяа4ъяе4ъяи4ъяо4ъяу4ъяъ4ъяю4ъяя4юаа4юае4юаи4юао4юау4юаъ4юаю4юая4юеа4юее4юеи4юео4юеу4юеъ4юею4юея4юиа4юие4юии4юио4юиу4юиъ4юию4юия4юоа4юое4юои4юоо4юоу4юоъ4юою4юоя4юуа4юуе4юуи4юуо4юуу4юуъ4юую4юуя4юъа4юъе4юъи4юъо4юъу4юъъ4юъю4юъя4ююа4ююе4ююи4ююо4ююу4ююъ4ююю4ююя4юяа4юяе4юяи4юяо4юяу4юяъ4юяю4юяя4яаа4яае4яаи4яао4яау4яаъ4яаю4яая4яеа4яее4яеи4яео4яеу4яеъ4яею4яея4яиа4яие4яии4яио4яиу4яиъ4яию4яия4яоа4яое4яои4яоо4яоу4яоъ4яою4яоя4яуа4яуе4яуи4яуо4яуу4яуъ4яую4яуя4яъа4яъе4яъи4яъо4яъу4яъъ4яъю4яъя4яюа4яюе4яюи4яюо4яюу4яюъ4яюю4яюя4яяа4яяе4яяи4яяо4яяу4яяъ4яяю4яяя4й4ббй4бвй4бгй4бдй4бжй4бзй4бйй4бкй4блй4бмй4бнй4бпй4брй4бсй4бтй4бфй4бхй4бцй4бчй4бшй4бщй4вбй4вв",
		5 : "2щ3ш22м3р22щ3ч22щ3ц22щ3х22щ3ф22щ3т22щ3с22щ3р22щ3п22щ3н22щ3м22щ3л22щ3к22щ3й22щ3з22щ3ж22щ3д22щ3г22щ3в22щ3б22ш3щ24ш3ш42ш3ч22ш3ц22ш3х22ш3ф22ш3т22ш3с22ш3р22ш3п22ш3н22ш3м22ш3л22ш3к22ш3й22ш3з22ш3ж22ш3д22ш3г22ш3в22ш3б22ч3щ22ч3ш24ч3ч42ч3ц22ч3х22ч3ф22ч3т22ч3с22ч3р22ч3п22ч3н22ч3м22ч3л22ч3к22ч3й22ч3з22ч3ж22ч3д22ч3г22ч3в22ч3б22ц3щ22ц3ш22ц3ч24ц3ц42ц3х22ц3ф22ц3т22ц3с22ц3р22ц3п22ц3н22ц3м22ц3л22ц3к22ц3й22ц3з22ц3ж22ц3д22ц3г22ц3в22ц3б22х3щ22х3ш22х3ч22х3ц24х3х42х3ф22х3т22х3с22х3р22х3п22х3н22х3м22х3л22х3к22х3й22х3з22х3ж22х3д22х3г22х3в22х3б22ф3щ22ф3ш22ф3ч22ф3ц22ф3х24ф3ф42ф3т22ф3с22ф3р22ф3п22ф3н22ф3м22ф3л22ф3к22ф3й22ф3з22ф3ж22ф3д22ф3г22ф3в22ф3б22т3щ22т3ш22т3ч22т3ц22т3х22т3ф24т3т42т3с22т3р22т3п22т3н22т3м22т3л22т3к22т3й22т3з22т3ж22т3д22т3г22т3в22т3б22с3щ22с3ш22с3ч22с3ц22с3х22с3ф22с3т24с3с42с3р22с3п22с3н22с3м22с3л22с3к22с3й22с3з22с3ж22с3д22с3г22с3в22с3б22р3щ22р3ш22р3ч22р3ц22р3х22р3ф22р3т22р3с24р3р42р3п22р3н22р3м22р3л22р3к22р3й22р3з22р3ж22р3д22р3г22р3в22р3б22п3щ22п3ш22п3ч22п3ц22п3х22п3ф22п3т22п3с22п3р24п3п42п3н22п3м22п3л22п3к22п3й22п3з22п3ж22п3д22п3г22п3в22п3б22н3щ22н3ш22н3ч22н3ц22н3х22н3ф22н3т22н3с22н3р22н3п24н3н42н3м22н3л22н3к22н3й22н3з22н3ж22н3д22н3г22н3в22н3б22м3щ22м3ш22м3ч22м3ц22м3х22м3ф22м3т22м3с24щ3щ42м3п22м3н24м3м42м3л22м3к22м3й22м3з22м3ж22м3д22м3г22м3в22м3б22л3щ22л3ш22л3ч22л3ц22л3х22л3ф22л3т22л3с22л3р22л3п22л3н22л3м24л3л42л3к22л3й22л3з22л3ж22л3д22л3г22л3в22л3б22к3щ22к3ш22к3ч22к3ц22к3х22к3ф22к3т22к3с22к3р22к3п22к3н22к3м22к3л24к3к42к3й22к3з22к3ж22к3д22к3г22к3в22к3б22й3щ22й3ш22й3ч22й3ц22й3х22й3ф22й3т22й3с22й3р22й3п22й3н22й3м22й3л22й3к24й3й42й3з22й3ж22й3д22й3г22й3в22й3б22з3щ22з3ш22з3ч22з3ц22з3х22з3ф22з3т22з3с22з3р22з3п22з3н22з3м22з3л22з3к22з3й24з3з42з3ж22з3д22з3г22з3в22з3б22ж3щ22ж3ш22ж3ч22ж3ц22ж3х22ж3ф22ж3т22ж3с22ж3р22ж3п22ж3н22ж3м22ж3л22ж3к22ж3й22ж3з24ж3ж42ж3д22ж3г22ж3в22ж3б22д3щ22д3ш22д3ч22д3ц22д3х22д3ф22д3т22д3с22д3р22д3п22д3н22д3м22д3л22д3к22д3й22д3з24д3д42д3г22д3в22д3б22г3щ22г3ш22г3ч22г3ц22г3х22г3ф22г3т22г3с22г3р22г3п22г3н22г3м22г3л22г3к22г3й22г3з22г3ж22г3д24г3г42г3в22г3б22в3щ22в3ш22в3ч22в3ц22в3х22в3ф22в3т22в3с22в3р22в3п22в3н22в3м22в3л22в3к22в3й22в3з22в3ж22в3д22в3г24в3в42в3б22б3щ22б3ш22б3ч22б3ц22б3х22б3ф22б3т22б3с22б3р22б3п22б3н22б3м22б3л22б3к22б3й22б3з22б3ж22б3д22б3г22б3в24б3б4_дз4в_дж4р_дж4л_вг4л_вд4л_вг4р_вг4н_вп4л_вк4л_вк4р_вт4р_сг4л_зд4р_сг4р_сб4р_сд4р_жд4р_ск4л_сп4л_сп4р_ст4р_ск4р_шп4р_ск4в_вз4р_вс4л_вс4м_вс4р_св4р_сх4л_сх4р_хв4р_вс4т_сх4в_см4рн4кт_н4кс_к4ст_"
	},
	patternChars : "_абвгдежзийклмнопрстуфхцчшщъьюя",
	patternArrayLength : 4713,
	valueStoreLength : 6512
};