// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
})(Language || (Language = {}));
;
export {};
// const user1 = {
//   name: "mulee",
//   role: Role.ADMIN // admin
//   lang: Language.Korean
// };
// const user2 = {
//   name: "hong",
//   role: Role.USER // user
//   lang: Language.Korean
// };
// const user2 = {
//   name: "john",
//   role: Role.GUEST // user
//   lang: Language.English
// };
