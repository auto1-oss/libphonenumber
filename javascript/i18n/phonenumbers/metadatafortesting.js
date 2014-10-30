/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/PhoneNumberMetadataForTesting.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.metadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {Object.<number, Array.<string>>}
 */
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
1:["US","BB","BS","CA"]
,33:["FR"]
,36:["HU"]
,39:["IT"]
,44:["GB","GG"]
,48:["PL"]
,49:["DE"]
,52:["MX"]
,54:["AR"]
,55:["BR"]
,61:["AU","CC","CX"]
,64:["NZ"]
,65:["SG"]
,81:["JP"]
,82:["KR"]
,86:["CN"]
,244:["AO"]
,262:["RE","YT"]
,375:["BY"]
,376:["AD"]
,800:["001"]
,971:["AE"]
,979:["001"]
};

/**
 * A mapping from a region code to the PhoneMetadata for that region.
 * @type {Object.<string, Array>}
 */
i18n.phonenumbers.metadata.countryToMetadata = {
"AD":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"AD",376,"00",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"AE":[,[,,"[1-9]\\d{8}","\\d{9}"]
,[,,"[1-9]\\d{8}","\\d{9}"]
,[,,"[1-9]\\d{8}","\\d{9}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"AE",971,"00",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"600\\d{6}","\\d{9}",,,"600123456"]
,,,[,,"NA","NA"]
]
,"AO":[,[,,"[29]\\d{8}","\\d{9}"]
,[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}","\\d{9}",,,"222123456"]
,[,,"9[1-3]\\d{7}","\\d{9}",,,"923123456"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"AO",244,"00","0~0",,,"0~0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"AR":[,[,,"[1-3689]\\d{9,10}","\\d{6,11}"]
,[,,"[1-3]\\d{9}","\\d{6,10}"]
,[,,"9\\d{10}|[1-3]\\d{9}","\\d{10,11}"]
,[,,"80\\d{8}","\\d{10}"]
,[,,"6(0\\d|10)\\d{7}","\\d{10}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"AR",54,"00","0",,,"0(?:(11|343|3715)15)?","9$1",,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["11"]
,"0$1","",0]
,[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["1[02-9]|[23]"]
,"0$1","",0]
,[,"(9)(11)(\\d{4})(\\d{4})","$2 15 $3-$4",["911"]
,"0$1","",0]
,[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 $3-$4",["9(?:1[02-9]|[23])"]
,"0$1","0$1 $CC",0]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"]
,"0$1","",0]
]
,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["11"]
,"0$1","",0]
,[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["1[02-9]|[23]"]
,"0$1","",0]
,[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3 $4",["911"]
]
,[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3 $4",["9(?:1[02-9]|[23])"]
]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"]
,"0$1","",0]
]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"AU":[,[,,"[1-578]\\d{4,14}","\\d{5,15}"]
,[,,"[2378]\\d{8}","\\d{9}"]
,[,,"4\\d{8}","\\d{9}"]
,[,,"1800\\d{6}","\\d{10}"]
,[,,"190[0126]\\d{6}","\\d{10}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"AU",61,"001[12]","0",,,"0",,"0011",,[[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]
,"$1","",0]
,[,"(\\d{1})(\\d{4})(\\d{4})","$1 $2 $3",["[2-478]"]
,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"BB":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"BB",1,"011",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"BR":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"BR",55,"",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"BS":[,[,,"(242|8(00|66|77|88)|900)\\d{7}","\\d{7,10}"]
,[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3-57]|9[2-5])|4(?:2[237]|51|64|77)|502|636|702)\\d{4}","\\d{7,10}"]
,[,,"242(357|359|457|557)\\d{4}","\\d{10}"]
,[,,"8(00|66|77|88)\\d{7}","\\d{10}"]
,[,,"900\\d{7}","\\d{10}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"BS",1,"011","1",,,"1",,,,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"BY":[,[,,"[1-9]\\d{5}","\\d{6}"]
,[,,"[1-9]\\d{5}","\\d{6}",,,"112345"]
,[,,"[1-9]\\d{5}","\\d{6}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"BY",375,"810","8",,,"80?|99999",,,1,[[,"(\\d{4})","$1",["[1-8]"]
,"8 $1","",0]
,[,"(\\d{2})(\\d{3})","$1 $2",["[1-8]"]
,"8$1","",0]
,[,"(\\d{3})(\\d{3})","$1 $2",["[1-8]"]
,"8 $1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"CA":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"CA",1,"011",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"CC":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"CC",61,"",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"CN":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"CN",86,"",,,,,,,1,[[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|95)"]
,"$1","$CC $1",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"CX":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"CX",61,"00",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"DE":[,[,,"\\d{4,14}","\\d{2,14}"]
,[,,"(?:[24-6]\\d{2}|3[03-9]\\d|[789](?:[1-9]\\d|0[2-9]))\\d{1,8}","\\d{2,14}",,,"30123456"]
,[,,"1(5\\d{9}|7\\d{8}|6[02]\\d{8}|63\\d{7})","\\d{10,11}"]
,[,,"800\\d{7}","\\d{10}"]
,[,,"900([135]\\d{6}|9\\d{7})","\\d{10,11}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"DE",49,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,8})","$1 $2",["2|3[3-9]|906|[4-9][1-9]1"]
,"0$1","",0]
,[,"(\\d{2})(\\d{4,11})","$1/$2",["[34]0|[68]9"]
,"0$1","",0]
,[,"([4-9]\\d)(\\d{2})","$1 $2",["[4-9]","[4-6]|[7-9](?:\\d[1-9]|[1-9]\\d)"]
,"0$1","",0]
,[,"([4-9]\\d{3})(\\d{2,7})","$1 $2",["[4-9]","[4-6]|[7-9](?:\\d[1-9]|[1-9]\\d)"]
,"0$1","",0]
,[,"(\\d{3})(\\d{1})(\\d{6})","$1 $2 $3",["800"]
,"0$1","",0]
,[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["900"]
,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"FR":[,[,,"3\\d{6}","\\d{7}"]
,[,,"3\\d{6}","\\d{7}"]
,[,,"3\\d{6}","\\d{7}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"FR",33,"00","0",,,"0",,,1,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]
,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"GB":[,[,,"\\d{10}","\\d{6,10}"]
,[,,"[1-6]\\d{9}","\\d{6,10}"]
,[,,"7[1-57-9]\\d{8}","\\d{10}"]
,[,,"80\\d{8}","\\d{10}"]
,[,,"9[018]\\d{8}","\\d{10}"]
,[,,"8(?:4[3-5]|7[0-2])\\d{7}","\\d{10}"]
,[,,"70\\d{8}","\\d{10}"]
,[,,"56\\d{8}","\\d{10}"]
,"GB",44,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-59]|[78]0"]
,"(0$1)","",0]
,[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["6"]
,"(0$1)","",0]
,[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["7[1-57-9]"]
,"(0$1)","",0]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8[47]"]
,"(0$1)","",0]
]
,,[,,"76\\d{8}","\\d{10}"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"GG":[,[]
,[]
,[]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"GG",44,"",,,,,,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"HU":[,[,,"30\\d{7}","\\d{9}"]
,[,,"30\\d{7}","\\d{9}"]
,[,,"30\\d{7}","\\d{9}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"HU",36,"","06",,,"06",,,1,,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"IT":[,[,,"[0389]\\d{5,10}","\\d{6,11}"]
,[,,"0\\d{9,10}","\\d{10,11}"]
,[,,"3\\d{8,9}","\\d{9,10}"]
,[,,"80(?:0\\d{6}|3\\d{3})","\\d{6,9}"]
,[,,"89(?:2\\d{3}|9\\d{6})","\\d{6,9}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["0[26]"]
,"","",0]
,[,"(\\d{3})(\\d{4})(\\d{3,4})","$1 $2 $3",["0[13-57-9]"]
,"","",0]
,[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["3"]
,"","",0]
,[,"(\\d{3})(\\d{3,6})","$1 $2",["8"]
,"","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,1,,[,,"NA","NA"]
]
,"JP":[,[,,"07\\d{5}|[1-357-9]\\d{3,10}","\\d{4,11}"]
,[,,"07\\d{5}|[1-357-9]\\d{3,10}","\\d{4,11}"]
,[,,"07\\d{5}|[1-357-9]\\d{3,10}","\\d{4,11}"]
,[,,"0777[01]\\d{2}","\\d{7}",,,"0777012"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"JP",81,"010","0",,,"0",,,1,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[57-9]0"]
,"0$1","",0]
,[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[57-9]0"]
,"0$1","",0]
,[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["111|222|333","(?:111|222|333)1","(?:111|222|333)11"]
,"0$1","",0]
,[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["222|333","2221|3332","22212|3332","222120|3332"]
,"0$1","",0]
,[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[23]"]
,"0$1","",0]
,[,"(\\d{3})(\\d{4})","$1-$2",["077"]
,"0$1","",0]
,[,"(\\d{4})","*$1",["[23]"]
,"$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"[23]\\d{3}","\\d{4}"]
,[,,"NA","NA"]
,1,,[,,"NA","NA"]
]
,"KR":[,[,,"[1-7]\\d{3,9}|8\\d{8}","\\d{4,10}"]
,[,,"(?:2|[34][1-3]|5[1-5]|6[1-4])(?:1\\d{2,3}|[2-9]\\d{6,7})","\\d{4,10}",,,"22123456"]
,[,,"1[0-25-9]\\d{7,8}","\\d{9,10}",,,"1023456789"]
,[,,"80\\d{7}","\\d{9}",,,"801234567"]
,[,,"60[2-9]\\d{6}","\\d{9}",,,"602345678"]
,[,,"NA","NA"]
,[,,"50\\d{8}","\\d{10}",,,"5012345678"]
,[,,"70\\d{8}","\\d{10}",,,"7012345678"]
,"KR",82,"00(?:[124-68]|[37]\\d{2})","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"]
,"0$1","",0]
,[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:[169][2-8]|[78]|5[1-4])|[68]0|[3-6][1-9][2-9]","1(?:[169][2-8]|[78]|5(?:[1-3]|4[56]))|[68]0|[3-6][1-9][2-9]"]
,"0$1","",0]
,[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"]
,"0$1","",0]
,[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"]
,"0$1","",0]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"]
,"0$1","",0]
,[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"]
,"0$1","",0]
,[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["2(?:[26]|3[0-467])","2(?:[26]|3(?:01|1[45]|2[17-9]|39|4|6[67]|7[078]))"]
,"0$1","",0]
,[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["2(?:3[0-35-9]|[457-9])","2(?:3(?:0[02-9]|1[0-36-9]|2[02-6]|3[0-8]|6[0-589]|7[1-69]|[589])|[457-9])"]
,"0$1","",0]
,[,"(\\d)(\\d{3})","$1-$2",["21[0-46-9]","21(?:[0-247-9]|3[124]|6[1269])"]
,"0$1","",0]
,[,"(\\d)(\\d{4})","$1-$2",["21[36]","21(?:3[035-9]|6[03-578])"]
,"0$1","",0]
,[,"(\\d{2})(\\d{3})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])","[3-6][1-9]1(?:[0-247-9]|3[124]|6[1269])"]
,"0$1","",0]
,[,"(\\d{2})(\\d{4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1[36]","[3-6][1-9]1(?:3[035-9]|6[03-578])"]
,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"MX":[,[,,"[1-9]\\d{9,10}","\\d{7,11}"]
,[,,"[2-9]\\d{9}","\\d{7,10}"]
,[,,"1\\d{10}","\\d{11}"]
,[,,"800\\d{7}","\\d{10}"]
,[,,"900\\d{7}","\\d{10}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"MX",52,"00","01",,,"01|04[45](\\d{10})","1$1",,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]
,"01 $1","",1]
,[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"]
,"01 $1","",1]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-24-9]|5[0-46-9]|8[2-9]|9[1-9]"]
,"01 $1","",1]
,[,"(1)(\\d{2})(\\d{4})(\\d{4})","045 $2 $3 $4",["1(?:33|55|81)"]
,"$1","",1]
,[,"(1)(\\d{3})(\\d{3})(\\d{4})","045 $2 $3 $4",["1(?:[124579]|3[0-24-9]|5[0-46-9]|8[02-9])"]
,"$1","",1]
]
,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]
,"01 $1","",1]
,[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"]
,"01 $1","",1]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-24-9]|5[0-46-9]|8[2-9]|9[1-9]"]
,"01 $1","",1]
,[,"(1)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]
]
,[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[124579]|3[0-24-9]|5[0-46-9]|8[02-9])"]
]
]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"NZ":[,[,,"[289]\\d{7,9}|[3-7]\\d{7}","\\d{7,10}"]
,[,,"24099\\d{3}|(?:3[2-79]|[479][2-689]|6[235-9])\\d{6}","\\d{7,8}"]
,[,,"2(?:[027]\\d{7}|9\\d{6,7}|1(?:0\\d{5,7}|[12]\\d{5,6}|[3-9]\\d{5})|4[1-9]\\d{6}|8\\d{7,8})","\\d{8,10}"]
,[,,"800\\d{6,7}","\\d{9,10}"]
,[,,"900\\d{6,7}","\\d{9,10}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"NZ",64,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[34679]"]
,"0$1","",0]
,[,"(\\d)(\\d{3})(\\d{3,5})","$1-$2 $3",["2[179]"]
,"0$1","",0]
,[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"]
,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"PL":[,[,,"[1-9]\\d{8}","\\d{9}"]
,[,,"[1-9]\\d{8}","\\d{9}"]
,[,,"(?:5[01]|6[069]|7[289]|88)\\d{7}","\\d{9}"]
,[,,"800\\d{6}","\\d{9}"]
,[,,"70\\d{7}","\\d{9}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"PL",48,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"RE":[,[,,"[268]\\d{8}","\\d{9}"]
,[,,"262\\d{6}","\\d{9}",,,"262161234"]
,[,,"6(?:9[23]|47)\\d{6}","\\d{9}",,,"692123456"]
,[,,"80\\d{7}","\\d{9}",,,"801234567"]
,[,,"8(?:1[01]|2[0156]|84|9[0-37-9])\\d{6}","\\d{9}",,,"810123456"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"RE",262,"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]
]
,,[,,"NA","NA"]
,,"262|6(?:9[23]|47)|8",[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"SG":[,[,,"[13689]\\d{7,10}","\\d{8}|\\d{10,11}"]
,[,,"[36]\\d{7}","\\d{8}"]
,[,,"[89]\\d{7}","\\d{8}"]
,[,,"1?800\\d{7}","\\d{10,11}"]
,[,,"1900\\d{7}","\\d{11}"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"SG",65,"0[0-3][0-9]",,,,"777777",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-9]"]
,"","",0]
,[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"]
,"","",0]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["800"]
,"","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"US":[,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}","\\d{7}(?:\\d{3})?",,,"1234567890"]
,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}","\\d{7}(?:\\d{3})?",,,"1234567890"]
,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}","\\d{7}(?:\\d{3})?",,,"1234567890"]
,[,,"8(?:00|66|77|88)\\d{7}","\\d{10}",,,"1234567890"]
,[,,"900\\d{7}","\\d{10}",,,"1234567890"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"US",1,"011","1"," extn. ",,"1",,,1,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",1]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",,"","",1]
]
,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",,"","",1]
]
,[,,"NA","NA"]
,1,,[,,"800\\d{7}","\\d{10}",,,"1234567890"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"YT":[,[,,"[268]\\d{8}","\\d{9}"]
,[,,"2696[0-4]\\d{4}","\\d{9}",,,"269601234"]
,[,,"639\\d{6}","\\d{9}",,,"639123456"]
,[,,"80\\d{7}","\\d{9}",,,"801234567"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"YT",262,"00","0",,,"0",,,,,,[,,"NA","NA"]
,,"269|639",[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
,"800":[,[,,"\\d{8}","\\d{8}",,,"12345678"]
,[,,"NA","NA",,,"12345678"]
,[,,"NA","NA",,,"12345678"]
,[,,"\\d{8}","\\d{8}",,,"12345678"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"001",800,"",,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,1,,[,,"NA","NA"]
]
,"979":[,[,,"\\d{9}","\\d{9}",,,"123456789"]
,[,,"NA","NA",,,"123456789"]
,[,,"NA","NA",,,"123456789"]
,[,,"NA","NA"]
,[,,"\\d{9}","\\d{9}",,,"123456789"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,[,,"NA","NA"]
,"001",979,"",,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",,"","",0]
]
,,[,,"NA","NA"]
,,,[,,"NA","NA"]
,[,,"NA","NA"]
,,,[,,"NA","NA"]
]
};
