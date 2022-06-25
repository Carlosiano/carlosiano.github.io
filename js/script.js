function tampilkanNasi() {
    $.getJSON('assets/data/menu.json', function (data) {
        let menu = data.menu[0].nasi;
        $.each(menu, function (i, data) {
            $('#card-diskon').append(
                `

        <div class="col">
          <div class="card shadow p-1">
            <div class="bd-placeholder-img card-img-top card-image">
              <img width="200" src="assets/img/menu/${data.img}" alt="" srcset="" />
            </div>
            <div class="card-body">
              <h4 class="card-text">${data.nama}</h4>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-danger">Pesan</button>
                </div>
                <div class="d-flex flex-column">
                  <small class="text-success">Rp.${data.harga}</small>
                  <small class="text-danger text-decoration-line-through">Rp.20.000</small>
                </div>
              </div>
            </div>
          </div>
        </div>
`
                );
        });
    });
}

tampilkanNasi()

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });
});
