const MAILS = [
    {
        "senderName": "Shane Delellis",
        "senderMail": "DBouchard@lorem.ly",
        "subject": "neque sed lectus dolor sit",
        "time": "2017-07-09T10:00:15.441Z",
        "body": "dolor nunc pharetra mattis tempor nullam pharetra lacus vitae magna egestas tortor mattis nunc id sit velit sed et adipiscing sollicitudin augue et pretium neque placerat malesuada tincidunt vestibulum massa",
        "isRead": true
    },
    {
        "senderName": "Rossana Velasco",
        "senderMail": "MZiniel@et.io",
        "subject": "lacus amet egestas tortor sagittis",
        "time": "2017-04-07T07:37:58.443Z",
        "body": "morbi pharetra dolor magna at sollicitudin tortor amet facilisis odio vel massa at ipsum lectus morbi tellus sit eget dolor nunc id malesuada magna nec hendrerit dolor tortor etiam augue",
        "isRead": true
    },
    {
        "senderName": "Cristina Renbarger",
        "senderMail": "APierce@rutrum.com",
        "subject": "pharetra aliquam aenean tellus facilisis",
        "time": "2017-12-02T12:51:53.631Z",
        "body": "id lacus vitae tincidunt ac placerat pulvinar turpis amet egestas aenean et sapien ac hendrerit tempor donec pulvinar mattis amet ipsum magna lacus egestas etiam tincidunt tempor neque magna etiam",
        "isRead": true
    },
    {
        "senderName": "Kerrissa Sari",
        "senderMail": "QJohnston@id.com",
        "subject": "sapien vestibulum dolor morbi nec",
        "time": "2017-11-23T05:18:18.344Z",
        "body": "sed magna amet magna magna mattis tortor mi at curabitur nullam at lacus ac vitae eros id aliquam aliquam vestibulum placerat consequat turpis curabitur nullam pharetra sed elementum facilisis dui",
        "isRead": false
    },
    {
        "senderName": "Norma Cann",
        "senderMail": "KWeeks@egestas.gov",
        "subject": "at tincidunt sit etiam dolor",
        "time": "2017-01-13T05:13:21.206Z",
        "body": "odio vitae facilisis lacus massa aliquam sollicitudin mi facilisis dolor et suspendisse dolor ante risus massa magna vitae ipsum eros lorem sagittis fringilla turpis aenean tortor scelerisque amet tortor tortor",
        "isRead": false
    },
    {
        "senderName": "Alberto Kachelmuss",
        "senderMail": "GRitchie@facilisis.org",
        "subject": "aenean neque tincidunt lacus pulvinar",
        "time": "2017-10-25T21:36:01.975Z",
        "body": "massa molestie sed sit porta amet mi sollicitudin mattis lacus morbi morbi vestibulum pulvinar sollicitudin tincidunt vestibulum amet tincidunt in elementum placerat mattis tellus sed curabitur sit fringilla eros ac",
        "isRead": false
    },
    {
        "senderName": "Dwain Christiansen",
        "senderMail": "NHarmati@tellus.ly",
        "subject": "donec egestas mi vitae id",
        "time": "2017-03-12T01:44:31.414Z",
        "body": "tempor mattis amet scelerisque odio ac magna sit elementum magna lacus egestas lacus sed massa lorem sed placerat tincidunt lacus amet id hendrerit odio scelerisque et malesuada fringilla elementum elit",
        "isRead": true
    },
    {
        "senderName": "Erma Fournier",
        "senderMail": "BHackman@tortor.io",
        "subject": "nullam eros tellus et magna",
        "time": "2017-03-11T02:25:38.965Z",
        "body": "mi adipiscing tortor fringilla tortor eget sollicitudin orci etiam dolor rutrum lectus nec sagittis tellus pulvinar nullam placerat facilisis massa morbi consectetur orci quis dolor pretium lorem malesuada ac nec",
        "isRead": true
    },
    {
        "senderName": "Pedro Wittcop",
        "senderMail": "DMuroski@scelerisque.io",
        "subject": "tellus turpis aliquam elit velit",
        "time": "2017-07-03T00:09:42.564Z",
        "body": "orci dolor at ipsum ante quis porta et vestibulum vestibulum sapien velit placerat magna pretium sollicitudin odio libero egestas egestas fringilla vitae velit odio ipsum sed sit pulvinar sed nec",
        "isRead": false
    },
    {
        "senderName": "Janis Gerhard",
        "senderMail": "CSwift@mi.gov",
        "subject": "ac orci tortor sit massa",
        "time": "2017-05-07T11:41:28.985Z",
        "body": "vestibulum tortor ac ac vitae magna vitae magna pulvinar pharetra tempor facilisis curabitur sapien nec ipsum suspendisse vestibulum nec aliquam placerat mattis sed tortor massa adipiscing adipiscing vestibulum mi placerat",
        "isRead": false
    },
    {
        "senderName": "Candelaria Reilly",
        "senderMail": "GPotate@sagittis.com",
        "subject": "vestibulum massa odio odio donec",
        "time": "2017-04-15T16:48:34.748Z",
        "body": "nec vel eget nunc sapien ante sed sollicitudin turpis morbi sed sed at vitae vestibulum dolor pulvinar sed massa morbi vitae tellus magna aenean mattis vestibulum adipiscing facilisis aliquam magna",
        "isRead": false
    },
    {
        "senderName": "Coretta Graves",
        "senderMail": "MDamiano@odio.ly",
        "subject": "lacus lacus ac sed at",
        "time": "2017-08-04T16:19:01.689Z",
        "body": "nunc sagittis sit risus odio tempor consequat mattis id dolor lacus aenean aenean egestas aenean magna suspendisse magna odio odio lacus dolor odio ac amet mattis sit molestie fringilla sed",
        "isRead": false
    },
    {
        "senderName": "Inessa Blunt",
        "senderMail": "YGarrod@vitae.gov",
        "subject": "massa nullam mi adipiscing facilisis",
        "time": "2017-03-04T15:47:33.848Z",
        "body": "lacus aliquam nullam ipsum pulvinar neque ipsum nec pretium at egestas dolor odio facilisis dui tortor hendrerit ac vestibulum nunc ipsum amet et lorem rutrum augue tellus placerat nullam lacus",
        "isRead": true
    },
    {
        "senderName": "Gilbert Hruska",
        "senderMail": "MBently@mattis.ly",
        "subject": "convallis convallis vestibulum ipsum magna",
        "time": "2017-07-14T20:49:28.654Z",
        "body": "et magna lectus aliquam sed turpis lacus donec sollicitudin facilisis augue magna ac libero lectus egestas consectetur dui sagittis donec ac dui donec morbi ac in mattis placerat nec adipiscing",
        "isRead": false
    },
    {
        "senderName": "Karolis Passanisi",
        "senderMail": "BMuroski@pulvinar.org",
        "subject": "lacus donec tortor ante morbi",
        "time": "2017-09-13T00:48:12.863Z",
        "body": "porta sit ac risus vitae magna aliquam fringilla sit augue sagittis tortor suspendisse morbi tortor facilisis porttitor tincidunt molestie in elementum odio et sapien lacus tortor velit et molestie donec",
        "isRead": true
    },
    {
        "senderName": "Ludmila Schamber",
        "senderMail": "IAubut@adipiscing.gov",
        "subject": "nunc sed neque hendrerit curabitur",
        "time": "2017-05-01T18:35:51.959Z",
        "body": "nec tempor porttitor sed aliquam molestie mattis id amet placerat tempor consequat sollicitudin sit libero etiam vel morbi turpis morbi consectetur sapien aliquam facilisis sagittis nunc sagittis sollicitudin pulvinar nec",
        "isRead": false
    },
    {
        "senderName": "Nathaniel Carrothers",
        "senderMail": "LAbney@velit.net",
        "subject": "convallis pulvinar sed amet etiam",
        "time": "2017-08-18T01:42:38.784Z",
        "body": "amet facilisis placerat nullam tincidunt dolor lacus sollicitudin libero non elementum nullam tempor lacus consequat placerat odio magna curabitur pulvinar odio quis mattis curabitur dolor tempor mattis aliquam tincidunt consectetur",
        "isRead": false
    },
    {
        "senderName": "Kellyann Troy",
        "senderMail": "PNoe@eros.org",
        "subject": "ante sollicitudin dolor non neque",
        "time": "2017-06-17T23:11:01.989Z",
        "body": "amet aliquam magna porttitor placerat sed orci sed augue dolor curabitur turpis vel vel facilisis dui pulvinar aliquam nullam turpis sapien lorem ante massa adipiscing porta tincidunt elementum non et",
        "isRead": true
    },
    {
        "senderName": "Janine Hollis",
        "senderMail": "NFisher@ac.net",
        "subject": "sit sapien vitae sit neque",
        "time": "2017-08-27T20:33:34.359Z",
        "body": "id pretium at sed et sagittis at nec lectus nullam dolor pretium et amet libero libero scelerisque sagittis sit tincidunt ipsum sollicitudin tincidunt sit elementum nunc sagittis nec lacus sed",
        "isRead": false
    },
    {
        "senderName": "Shanstella Michaels",
        "senderMail": "DAbney@tortor.org",
        "subject": "libero consequat libero libero tortor",
        "time": "2017-07-19T15:20:03.726Z",
        "body": "ipsum massa sapien amet placerat eget elementum massa amet donec vitae tincidunt magna sed sit turpis donec egestas lacus nunc molestie sit porttitor odio at facilisis orci in sapien sollicitudin",
        "isRead": true
    },
    {
        "senderName": "Natalia Griebel",
        "senderMail": "VHawkins@convallis.com",
        "subject": "amet non lacus vitae eros",
        "time": "2017-01-08T20:16:12.944Z",
        "body": "aenean eget sollicitudin et odio vestibulum neque elit curabitur eros vestibulum et lorem molestie tortor placerat malesuada donec adipiscing fringilla at eget lectus libero augue amet et sit dolor consectetur",
        "isRead": false
    },
    {
        "senderName": "Raymond Schwartzberg",
        "senderMail": "SHampton@scelerisque.org",
        "subject": "odio massa lorem et curabitur",
        "time": "2017-07-07T18:46:13.595Z",
        "body": "facilisis quis pharetra lacus amet lacus ipsum sed porta fringilla magna sapien orci magna consequat in massa sed mi convallis pulvinar tincidunt sapien lorem magna ac vitae tincidunt magna lacus",
        "isRead": true
    },
    {
        "senderName": "Meera Hmptn",
        "senderMail": "AHarkema@lorem.gov",
        "subject": "morbi sed pulvinar massa molestie",
        "time": "2017-09-01T06:36:13.308Z",
        "body": "molestie mi aliquam eget tempor convallis aliquam tortor neque neque amet orci amet tortor ipsum turpis aliquam adipiscing lacus et amet aliquam magna risus dui adipiscing elementum et sed lacus",
        "isRead": true
    },
    {
        "senderName": "Letisha Cooper",
        "senderMail": "MButler@egestas.com",
        "subject": "amet tortor rutrum nunc et",
        "time": "2017-11-07T01:04:34.724Z",
        "body": "sit augue molestie vitae massa sed ipsum orci vestibulum mattis in placerat porta orci massa quis dolor in tincidunt non mattis sit massa egestas eros orci mattis pharetra lectus mattis",
        "isRead": true
    },
    {
        "senderName": "Fang Larrabee",
        "senderMail": "APartridge@sit.net",
        "subject": "et tellus aenean ante eros",
        "time": "2017-05-24T13:29:56.176Z",
        "body": "amet nec risus egestas consequat mi nunc risus aliquam neque adipiscing tempor ac curabitur ante placerat tortor sit sit lacus suspendisse tortor adipiscing sollicitudin consequat egestas mi rutrum nec eget",
        "isRead": true
    },
    {
        "senderName": "Julius Kirchner",
        "senderMail": "MWilson@nec.com",
        "subject": "sit turpis magna et pulvinar",
        "time": "2017-12-09T17:05:04.340Z",
        "body": "facilisis augue pulvinar malesuada non amet augue magna orci sed nec ante sollicitudin sit placerat sed odio orci amet ac elit magna aliquam consectetur aliquam mattis facilisis vestibulum mi placerat",
        "isRead": true
    },
    {
        "senderName": "Oscar Decoster",
        "senderMail": "MHigdon@egestas.net",
        "subject": "et elementum lacus ac odio",
        "time": "2017-06-22T21:25:36.164Z",
        "body": "nunc magna elit magna vitae consectetur neque consectetur morbi donec mattis magna pulvinar turpis odio malesuada ac odio et ante quis ipsum malesuada sed libero lectus mattis amet vestibulum sollicitudin",
        "isRead": false
    },
    {
        "senderName": "Brett Knost",
        "senderMail": "ZBorgford@placerat.com",
        "subject": "magna fringilla mattis risus sapien",
        "time": "2017-06-22T20:53:54.797Z",
        "body": "massa odio ac lacus velit malesuada odio aliquam massa facilisis lacus sollicitudin vitae pulvinar magna lacus suspendisse donec nunc adipiscing at eros sollicitudin odio lorem id mi sollicitudin sed sagittis",
        "isRead": false
    },
    {
        "senderName": "Edwin Bradley",
        "senderMail": "LGoogleanalytics@sed.ly",
        "subject": "sit suspendisse elementum consequat odio",
        "time": "2017-05-25T22:47:29.833Z",
        "body": "lacus nec sagittis vestibulum mi pulvinar massa tortor sed dolor lacus adipiscing aenean molestie vitae id sagittis non etiam at sollicitudin massa amet dolor elementum non quis ante augue elementum",
        "isRead": true
    },
    {
        "senderName": "Verlinda Dawson",
        "senderMail": "LStrange@at.net",
        "subject": "tempor nullam placerat hendrerit lacus",
        "time": "2017-07-12T18:56:17.526Z",
        "body": "ante suspendisse molestie mi magna eget consectetur lacus pretium sit id sed magna nunc in sollicitudin lacus etiam tortor vestibulum lorem velit odio nec nullam ac sapien dolor elit ipsum",
        "isRead": true
    },
    {
        "senderName": "Dalton Joyner",
        "senderMail": "JEspinosa@vestibulum.io",
        "subject": "scelerisque sapien pretium sed et",
        "time": "2017-04-12T09:57:41.069Z",
        "body": "lectus magna odio nec eros libero non dolor mattis mattis pharetra eget amet sit ipsum at lectus facilisis libero in eros porta placerat malesuada egestas mi curabitur aliquam et mi",
        "isRead": false
    },
    {
        "senderName": "Jeanneth Franklin",
        "senderMail": "EPointelin@rutrum.gov",
        "subject": "sed sed nunc ipsum sed",
        "time": "2017-06-06T09:25:37.369Z",
        "body": "molestie sollicitudin aenean curabitur tempor in libero dolor amet dolor vestibulum in egestas consequat et ipsum nec pulvinar consequat ac placerat etiam consectetur sapien sit sollicitudin aliquam lacus lorem consectetur",
        "isRead": false
    },
    {
        "senderName": "Mike Glover",
        "senderMail": "LDerucher@amet.com",
        "subject": "risus pulvinar vestibulum sed aliquam",
        "time": "2017-06-25T18:29:02.039Z",
        "body": "sed donec velit aenean sagittis velit libero quis mattis donec adipiscing adipiscing donec consectetur sollicitudin ipsum egestas curabitur sed massa amet sit vitae hendrerit quis mattis dolor augue egestas dolor",
        "isRead": false
    },
    {
        "senderName": "Chris Kish",
        "senderMail": "KKemmerling@risus.io",
        "subject": "elementum sagittis non massa placerat",
        "time": "2017-08-22T22:42:50.061Z",
        "body": "eros elit lacus magna tincidunt turpis ac elit ipsum sit elit vestibulum etiam vel ante nec fringilla sed consectetur nec porttitor aliquam tortor convallis amet scelerisque consequat quis morbi pretium",
        "isRead": false
    },
    {
        "senderName": "John Bristow",
        "senderMail": "LMarin@mattis.org",
        "subject": "scelerisque ipsum risus at tempor",
        "time": "2017-01-28T07:30:10.910Z",
        "body": "scelerisque dui lectus tempor lacus odio tortor pharetra consequat sed vestibulum dolor tortor sed facilisis ac et egestas sed tortor sed ac ac pulvinar aliquam augue fringilla tincidunt scelerisque at",
        "isRead": true
    },
    {
        "senderName": "Jodene Herbert",
        "senderMail": "AMarzolf@vitae.net",
        "subject": "facilisis tincidunt placerat elementum odio",
        "time": "2017-09-25T08:56:59.744Z",
        "body": "sollicitudin lacus sed eros amet risus lacus tempor dui nec pretium vestibulum porttitor dolor pulvinar consequat mi amet sed libero vitae fringilla in amet lectus mattis consequat dolor pretium elementum",
        "isRead": false
    },
    {
        "senderName": "Jaime Sanchez",
        "senderMail": "CBrunie@vitae.io",
        "subject": "rutrum odio neque eget sollicitudin",
        "time": "2017-11-07T21:33:01.444Z",
        "body": "pretium non velit ac sit mattis dolor donec et nunc eget lorem non vel donec sit magna dolor elementum convallis eros velit morbi odio amet in eros sagittis morbi lectus",
        "isRead": true
    },
    {
        "senderName": "Tanny Noe",
        "senderMail": "MGlover@elit.org",
        "subject": "elit molestie velit libero pretium",
        "time": "2017-06-01T16:02:45.296Z",
        "body": "facilisis pharetra sed lacus convallis odio eros sapien donec at rutrum sollicitudin sed etiam odio sed etiam adipiscing mattis turpis tortor scelerisque libero tortor malesuada rutrum massa lacus fringilla vel",
        "isRead": true
    },
    {
        "senderName": "Denis French",
        "senderMail": "LMueske@ante.org",
        "subject": "ipsum magna amet ac sed",
        "time": "2017-06-18T10:29:31.095Z",
        "body": "fringilla molestie in non consequat mattis et sed porttitor et magna libero pulvinar massa massa sapien elementum nec elementum molestie tortor sed aliquam eros donec mi porta sollicitudin sed etiam",
        "isRead": true
    },
    {
        "senderName": "Tom Packard",
        "senderMail": "AFranklin@tincidunt.com",
        "subject": "tortor lacus lacus dui ipsum",
        "time": "2017-03-21T08:31:00.479Z",
        "body": "at nunc lacus pretium aliquam tincidunt turpis egestas lacus ac lacus eget odio sed tortor eros suspendisse sapien tortor amet vitae tincidunt et amet augue ante turpis eget sit augue",
        "isRead": false
    },
    {
        "senderName": "Alina Zuniga",
        "senderMail": "MAlpert@sollicitudin.gov",
        "subject": "tempor donec aliquam aliquam quis",
        "time": "2017-08-03T21:05:03.725Z",
        "body": "sed dui aliquam eget magna non consectetur lorem convallis adipiscing nec rutrum molestie vestibulum suspendisse aenean porttitor ac porta dolor rutrum tempor libero eget vestibulum vestibulum augue ac aliquam molestie",
        "isRead": false
    },
    {
        "senderName": "Arlesia Zamora",
        "senderMail": "MElkins@sed.ly",
        "subject": "tincidunt elit amet quis dolor",
        "time": "2017-11-14T17:44:06.040Z",
        "body": "sed velit sed libero dolor sit amet consequat fringilla sagittis sollicitudin magna elit sed lacus lacus tincidunt lectus libero augue amet nec risus tincidunt turpis nec ante sit magna nunc",
        "isRead": true
    },
    {
        "senderName": "Eva Monuteaux",
        "senderMail": "JTruth@mattis.ly",
        "subject": "vel pulvinar porta aliquam velit",
        "time": "2017-12-04T02:22:21.711Z",
        "body": "vestibulum pulvinar nunc at sit ac tortor id et nec dui pretium sed dolor amet molestie libero tempor nunc amet non odio ac dolor sollicitudin tincidunt pharetra aenean et porta",
        "isRead": true
    },
    {
        "senderName": "Gene Absalom",
        "senderMail": "MChadwick@placerat.org",
        "subject": "id dolor aliquam egestas amet",
        "time": "2017-03-25T11:28:09.584Z",
        "body": "porttitor lectus vestibulum neque placerat fringilla lorem augue vestibulum non sit quis amet augue amet et odio ipsum neque eget dui magna nec porta odio vel fringilla ipsum mattis at",
        "isRead": true
    },
    {
        "senderName": "Andre Mcintyre",
        "senderMail": "ANoriega@tincidunt.ly",
        "subject": "quis facilisis lorem tellus magna",
        "time": "2017-09-04T21:36:36.703Z",
        "body": "vestibulum sed vitae massa porttitor augue vestibulum convallis ipsum nullam velit vitae in placerat mi sed placerat magna ac aenean velit sagittis aenean sollicitudin nullam facilisis ac sollicitudin sed nullam",
        "isRead": true
    },
    {
        "senderName": "Stacie Forenda",
        "senderMail": "NIsham@odio.org",
        "subject": "tempor tellus sed aliquam non",
        "time": "2017-02-11T15:08:57.435Z",
        "body": "vel magna risus tellus ipsum libero magna ipsum augue dolor vel adipiscing magna egestas sit magna ante vestibulum tortor dolor et placerat pharetra tincidunt vitae nec etiam mi libero magna",
        "isRead": false
    },
    {
        "senderName": "Brooks Levin",
        "senderMail": "LBednarsh@tellus.ly",
        "subject": "eros amet massa ipsum mattis",
        "time": "2017-04-23T23:45:36.105Z",
        "body": "vitae nec aliquam sed vitae adipiscing sollicitudin nunc tincidunt porta amet sit non dolor mi vel lectus eget dui vitae ac vestibulum pulvinar quis at libero pulvinar sed tincidunt massa",
        "isRead": true
    },
    {
        "senderName": "Walter Leonard",
        "senderMail": "RSadler@non.ly",
        "subject": "elementum tortor pharetra aliquam dui",
        "time": "2017-10-31T17:35:06.921Z",
        "body": "magna rutrum dolor in mattis scelerisque aliquam magna amet ac tincidunt sollicitudin id mattis ac aliquam sit massa tincidunt sed molestie magna lacus scelerisque porta eros pulvinar nullam pharetra at",
        "isRead": false
    },
    {
        "senderName": "Amani Crider",
        "senderMail": "JNemichand@sollicitudin.net",
        "subject": "nec id at lacus ac",
        "time": "2017-03-17T09:58:36.052Z",
        "body": "vitae aliquam neque suspendisse massa fringilla consequat nec dui in consectetur massa consectetur massa placerat lacus nunc donec etiam ante magna odio elit suspendisse malesuada aenean dolor hendrerit pulvinar magna",
        "isRead": true
    },
    {
        "senderName": "Ronald Pennell",
        "senderMail": "WCarter@lacus.io",
        "subject": "sollicitudin nullam pretium massa ac",
        "time": "2017-09-02T03:48:24.391Z",
        "body": "aenean rutrum sed morbi dolor nec etiam lorem vitae in risus dolor aliquam vitae sed dolor vel ante molestie id id tortor sollicitudin rutrum sit id scelerisque mattis sagittis sollicitudin",
        "isRead": true
    }
]

function getMails() {
    return Promise.resolve(MAILS)
}

export default {
    getMails
}