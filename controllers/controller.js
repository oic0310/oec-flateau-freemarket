//とりあえずのホーム画面
exports.cesiumInitialControl = (req, res) =>{
    
    let param = {
      title: "バーチャルフリーマーケット",
      description: "バーチャルフリーマーケットサンプルです",
      message:"サンプル"
    }
    res.render("index", param);
}

//イベント登録
exports.cesiumInitialControl = (req, res) =>{
    
    let param = {
      title: "イベント登録",
      description: "バーチャルフリーマーケットサンプルです",
      message:"サンプル"
    }
    res.render("index", param);
}