//replacing WUB with empty space using reguler expression concept. 
//if you write with RE then only first lub get removed.
//in below WUB/g ->g stands for global
/*regular expresions can be tested in REG101 web site*/

const songDecoder = (song) => {

  //return song.replace(/WUB/g," "); it not worked because eachWUB its giving space .when u have 2 WUBs
//continuoly two spaces appearing but it shouldn't happen to avoid that we have changed RE as follows:
//return song.replace(/(WUB)+/g," "); //again its not workin as we have to remove trailing spaces as well
return  (song.replace(/(WUB)+/g," ")).trim().length(); //trim will remove spaces at begining and at end.

}

console.log(songDecoder("WUBAWUBBWUBCWUBDWUB"));