'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d7fce9fee471194aa8b5b6e47267f03",
".git/config": "67c652ce7d497ee78f0641eec5d4b671",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d45b42b31f8cff832bacc9f179399834",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e044945747951dfbb785ec5f5ac03949",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "927c67563344e5672d2d2c613c3b07ce",
".git/logs/refs/heads/main": "15a5e16b45d8b1fa28fd0cb6961dd3d5",
".git/logs/refs/remotes/origin/main": "1ccb8980769aa6eb91697c53003f82e6",
".git/objects/00/a4532c1d72ee4eaf913fe04782009d518fc643": "a65d47b28dbfed6bc6860e9de58d7cc7",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "6572ec976f310150bf4228c7272df4af",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/09/06aafb978638171e8b36b628556ccb057c0925": "8e730dc3bd111654d9a248098a8860f7",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "9f3783873483d3a4ce0fd9f6cf78ed42",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "debd579957a59e75acf3957aafe6371d",
".git/objects/12/7fd1b8ce8d5159ce555ea0a85b190ec3b3e3a3": "b010e406a0eb4e65f00be7e69040dbb8",
".git/objects/14/8e4e3557d8ccb7c508c99a88b68155f16041f2": "496664f9c73bc2e862c96572aafc3106",
".git/objects/15/e3cd33d86e2b2ad20e762e83eea7df6cd6ca5e": "489d58ccb7f83bc7c683de15db264ffd",
".git/objects/17/12aa7a3aef4c0f3238eabd7beb685529d061d5": "18c3cdd3a77fedecd5c9c77a3b08d18b",
".git/objects/17/bf58287cc09df4c39a108406e33f92db102786": "e1862066a2a5b3cae058cc1891389f23",
".git/objects/1b/4d02eab9e9e8b08a66f65619eb02a2c4f6e715": "6e718911e2e613ec3e59c73e12d29323",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "f07652cb6dc7b9aa12ba65abf1e4f721",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "251e22397e6c959e095ea2e4aa53cb70",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/d91c7b7ba29a9dd37602b99ad70a85b36ff946": "be7a7ff3d29818f52430931f6e606ed5",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2b/df0650ef323fb921943387f9ff77e10b85c2c8": "9d205a0876f87213b2e8e114eb65aaa4",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "0fa35fd3f51bcbfe446d55243fffff36",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "48ac860537d385bd3298488b8ff52492",
".git/objects/35/cd5a0b53951783ff0baa4524857b5b71b3f8aa": "083189bc0236ded29a8f5b38ef789187",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "56bdf2841acb698c463f6cdb79cd93f3",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "bbd317028341801cd4b390ac77316160",
".git/objects/40/f27f0b4f5281b873a5e8909d4cbbf9b94876b7": "e16323900224965336e334dcd21fd4d0",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "272c5e4a8ea5aa780becb9525b9def98",
".git/objects/4a/d725bd5db98dd87094b71f73a8fd90dde4faf9": "9113d50ee2308a7cc80593778f5c6865",
".git/objects/4e/43e2e9d06d7dd1ccabb90872ae1ee3fa12612b": "ff9857dbf2ba45ca32ae8a0eaa262ceb",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5e/3f4aae19fae7b20f231c34404d0bcbf0695f86": "6dbef8c9c65b7ee67f085cd942f4d65a",
".git/objects/5e/bc131f63c96a3a34f7832b17089a69cc9e3075": "42117a0ba90e86be45d3b93abfc70346",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "11ab728ea4f84f005feb4d2ec2d09bbb",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "329310ef059f8d0436103fe61c3509e9",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "6a4afc858aa72c6e78797f235449fa5d",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "c0cec6504a70edd830ad3ba323a39000",
".git/objects/67/62e52ccf4d43942393a864bc367e74e1ba50d0": "370752b868b002cc304b1922493a7d7d",
".git/objects/6b/243bfbd24975883dd6547a2e31d85ab5e1269d": "56672cdad05345a3c132572a40663114",
".git/objects/6b/5a9f9de7d19cac71021eae2dcf072fce8e1008": "dfdb8769be6844fb2d1fa1b6a75be0a8",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/029da3f6c70a4c5307371d79acf176736a3301": "ec3213600ba9369ffcbd5452b2111bea",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bec0e0fe9df1f2b61314615a6cef4ce1cb269a": "d7fa9b6d4a86b9b729b66efe2299aec4",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "2ac846492a264a18d31c62c9b20cfa25",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8d/0f81bd594d6aee978bba934a958217f8d6ef10": "d5d63932549de387e799eff87310f78f",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "bebeb84932fedfd964ed26276be805fd",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "e186551c75f3f47db9146181612e3d3a",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "d9dcdffd519e40c12b95599770c50ec7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/048246d170635857a311511db85eeabee8cbab": "16ac1e6f7766d6674db7bd638fbc2986",
".git/objects/aa/905460376ecc8c58a281a5432c481ebc6fb6d8": "2cfb8b49d8d5bc6c85ca5447807d6e4e",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "7bfd5a3b88b223e88461fd8ef5ba946c",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "8b87ed31ede29b8291f7ab9936c393cd",
".git/objects/b6/1c061f5b22fecf433fdedbe64b3f7b07730edf": "e0ea4c173dfbd6701f299d1dcdf62408",
".git/objects/b6/7495b1bd8f08307d29c3ea28ecfb545322d88e": "07fe03d3bc1ed7fe0a4b17cb70c12390",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "1f8764c6ce61700e2d0c2906910e8ec8",
".git/objects/be/47a59ad6e46d3514ced4b587230f031341b43f": "514b551acd023b62f673d2dfadb213af",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "30e1c1f252f3d706a30dad1d83b824de",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "367c15726b51b46f0458cde21b412455",
".git/objects/cd/02342a9b26fbbadc89c8506bd223e7a2fb8fbc": "784bf1f62994df821bddf1692bf21c84",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/0c947d6e672ca750a0171d5c9edafa6f7d8e36": "a17c2b67cd85878b680a56a938f2f01d",
".git/objects/d1/0db1aec9a8b2c2cfa3a3370b3467a3aedb3e63": "04408e4885f5c2c27f90edd4265d325d",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "68992951741532a8cc96c1a1b76b6968",
".git/objects/d3/53082d6daee9fb3c100a7ef715a4a5e8ba5a61": "3410d62d97f41ef920eab2b679fa8886",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6891fbe79484cc440e0393f6f9b73fcf",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "101466c79270f39a8ab005208bf3d5cc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "23eb5189bf36c03ed69aa577477379bb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "b5a3949e3fc568e69d093d31eeb00aa9",
".git/objects/e2/3fbd2f16f88c12cae2d0a8b1daa68f7f2fbcbb": "be9b708c6781efdc3294071a5fe7477a",
".git/objects/e2/5bab6393aa0e27833ad840fa8b995096857c4f": "82f946bf78fff44ccae6573152c2277c",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "feb463bf0c45b7e16ea9e3e060074110",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "4d92799b73e0d2219838a3b19043f37d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "1db86729a65b2c8145af0971dc8a731d",
".git/objects/f4/b2c0d02ab8f2a8c5f7fa44ece4680583e887d8": "6112c6924070f64d879468c66605a06e",
".git/objects/f8/3705ee59a907f17e018645fa69e2820bbe08e0": "d787c28e59b3aed18c0ca50d80ba38bf",
".git/objects/f9/8499809d214aed1bb8e14a16cf7c157d3c5edb": "03305f322ad50fe861f7d68519ce41ba",
".git/ORIG_HEAD": "af10fce63f2fcd91e8736907b6359984",
".git/refs/heads/main": "af10fce63f2fcd91e8736907b6359984",
".git/refs/remotes/origin/main": "af10fce63f2fcd91e8736907b6359984",
".github/workflow/web.yamel": "fc18a1dea187363f340b1b1c629fc2c1",
"assets/AssetManifest.json": "33e71c6210b587239570374096db1f68",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/boshy.png": "b72605794a897d134d1fda773138bfa9",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic1.jpg": "ee28a469d83b08b27cfc48a5a2457c86",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic2.PNG": "fa078f21863853cee47f6999634639b2",
"assets/images/pic3.png": "8fd528fb555cc21819da79868e86bb98",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic4.PNG": "15a8e4d622b4591f3d2bfbf4741e8052",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic5.PNG": "129f4eb7f81024192a7ae797825e4773",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic6.PNG": "3e94feaeeb98eb62b2a7d7d91a93ab6d",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic7.PNG": "f5e4edee08d38f28cc8043ad31da48d7",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/NOTICES": "2d73c7ed6a5ce7e17e5aec921869384d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d16eafc4c9d9f038a83ca08fb6880f90",
"/": "d16eafc4c9d9f038a83ca08fb6880f90",
"main.dart.js": "b5b54c1b18155b17af46fdb65610de26",
"manifest.json": "d9dc662394d48f7366bebf8285dddc2d",
"version.json": "e61562205d34886b84f8016227e0010e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
