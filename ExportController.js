function save(text, filename)  {
    if(checkFileName(filename))
    {
        if(filename="")
        {
            filename = "output";
        }
        var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, filename+".txt");
    }
    else
    {
        alert("Nieprawidłowa nazwa pliku!")
    }
};

function checkFileName(filename){
    if(filename.includes("\"") || filename.includes("\0"))
    {
        return false;
    }
    else {
        return true;
    }
}