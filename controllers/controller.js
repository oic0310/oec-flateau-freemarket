//とりあえずのホーム画面
exports.cesiumInitialControl = (req, res) =>{
    const message = "Hello World!";
    let param = {
      title: "バスローケーションデータ連携(GTFS-RT)",
      description: "東京都交通局バスロケーション情報を30秒に1回更新でプロットするサンプルです",
      message:"Hello World!"
    }
    res.render("index", param);
}