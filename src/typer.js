var InitialMessage = Array("\n \
>> DECRYPTING LUKS DRIVE.\n\n \
    [!] HARD DISK DECRYPTED\n\n \
>> LOADING INITIAL CONFIGURATIONS.\n\n \
    [+] DEFAULT MODULES LOADED \n\n \
    [+] USER DEFINED SETTINGS LOADED \n\n \
    [+] NETWORK PROFILE UPDATED \n\n\n\n \
PRESS <ENTER> TO LOG IN...");

var CharacterPos = 0; 
    MsgBuffer = "";
    TypeDelay = 30; 
    NxtMsgDelay = 30000;
    MsgIndex = 0; 
    delay = '';
    MsgArray = InitialMessage

function StartTyping() { 
    var id = document.getElementById('typingText');
    if (CharacterPos != MsgArray[MsgIndex].length) {
        MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
        id.value = MsgBuffer+'_';
        delay = TypeDelay;
        id.scrollTop = id.scrollHeight;
    } else { 
        delay = NxtMsgDelay; 
        MsgBuffer   = ""; 
        CharacterPos = -1; 
            if (MsgIndex!=MsgArray.length-1){
                MsgIndex++; 
            }else {
                MsgIndex = 0; 
            }
    } 
    CharacterPos++; 
    setTimeout("StartTyping('"+CharacterPos+"')",delay); 
}

window.onload = function() {
StartTyping();
};