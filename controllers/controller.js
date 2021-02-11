//とりあえずのホーム画面
exports.cesiumInitialControl = (req, res) =>{
    
    let param = {
      title: "バーチャルフリーマーケット",
      description: "バーチャルフリーマーケットサンプルです",
      message:"サンプル"
    }
    res.render("index", param);
}