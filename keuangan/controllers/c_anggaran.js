var mnu       ='anggaran'; 
var mnu2      ='tahunbuku'; 
var mnu3      ='departemen'; 
// var mnu4      ='jenis'; 
// var mnu5      ='barang'; 
// var mnu6      ='kondisi'; 
// var mnu7      ='tempat'; 

var dir       ='models/m_'+mnu+'.php';
var dir2      ='models/m_'+mnu2+'.php';
var dir3      ='../akademik/models/m_'+mnu3+'.php';
// var dir4      ='models/m_'+mnu4+'.php';
// var dir5      ='models/m_'+mnu5+'.php';
// var dir6      ='models/m_'+mnu6+'.php';
// var dir7      ='models/m_'+mnu7+'.php';

var a_contentFR = k_contentFR = b_contentFR ='';
    
// main function ---
    $(document).ready(function(){
        //form content
            // anggaran
            a_contentFR += '<form autocomplete="off" onsubmit="anggaranSV();return false;" id="'+mnu+'FR">' 
                            +'<input id="a_idformH" type="hidden">' 
                            
                            +'<label>Tahun Buku</label>'
                            +'<div class="input-control text size2">'
                                +'<input  type="hidden" name="a_tahunbukuH" id="a_tahunbukuH">'
                                +'<input disabled="disabled" name="a_tahunbukuTB" id="a_tahunbukuTB">'
                                +'<button class="btn-clear"></button>'
                            +'</div>'
                            
                            +'<label>Departemen</label>'
                            +'<div class="input-control text size3">'
                                +'<input  type="hidden" name="a_departemenH" id="a_departemenH">'
                                +'<input disabled name="a_departemenTB" id="a_departemenTB">'
                                +'<button class="btn-clear"></button>'
                            +'</div>'
                            
                            +'<label>Kategori Anggaran</label>'
                            +'<div class="input-control text">'
                                +'<input  placeholder="Kategori Anggaran"  required type="text" name="a_namaTB" id="a_namaTB">'
                                +'<button class="btn-clear"></button>'
                            +'</div>'

                            +'<label>Nominal</label>'
                            +'<div class="input-control text">'
                                +'<input  placeholder="anggaran" onfocus="inputuang(this);" required type="text" name="a_nominalTB" id="a_nominalTB">'
                                +'<button class="btn-clear"></button>'
                            +'</div>'

                            +'<label>Keterangan</label>'
                            +'<div class="input-control textarea">'
                                +'<textarea placeholder="keterangan" name="a_keteranganTB" id="a_keteranganTB"></textarea>'
                            +'</div>'
                            
                            +'<div class="form-actions">' 
                                +'<button class="button primary">simpan</button>&nbsp;'
                                +'<button class="button" type="button" onclick="$.Dialog.close()">Batal</button> '
                            +'</div>'
                        +'</form>';
            //katalog
            k_contentFR +=' <div class="grid">'
                                +'<form enctype="multipart/form-data" class="span12" autocomplete="off" onsubmit="katalogSV(); return false;" id="'+mnu3+'FR">' 
                                    +'<input id="k_idformH" type="hidden">' 
                                    // lokasi , keterangan
                                    +'<div class="row">'
                                        +'<div class="span5"> '
                                            +'<label>Lokasi</label>'
                                            +'<div class="input-control text">'
                                                +'<input disabled="disabled" name="k_lokasiTB" id="k_lokasiTB">'
                                                +'<button class="btn-clear"></button>'
                                            +'</div>'
                                        +'</div>'
                                        +'<div class="span5">'
                                            +'<label>Keterangan</label>'
                                            +'<div class="input-control text">'
                                                +'<input placeholder="keterangan" name="k_keteranganTB" id="k_keteranganTB">'
                                                // +'<textarea placeholder="keterangan" name="g_keteranganTB" id="g_keteranganTB"></textarea>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'
                                    
                                    // nama grup barang , gambar
                                    +'<div class="row">'
                                        +'<div class="span5">'
                                            +'<label>Grup Barang</label>'
                                            +'<div class="input-control text">'
                                                +'<input type="hidden" name="k_grupH2" id="k_grupH2">'
                                                +'<input disabled placeholder="Grup Barang" name="k_grupTB" id="k_grupTB">'
                                                +'<button class="btn-clear"></button>'
                                            +'</div>'
                                        +'</div>'
                                        +'<div class="span5"> '
                                            +'<label>Gambar Barang</label>'
                                            // +'<div class="input-control file info-state" data-role="input-control">'
                                                +'<input type="hidden" id="k_photoH"/>'
                                            +'<div id="k_photoDV" class="input-control file" data-role="input-control">'
                                                +'<input onchange="PreviewImage(this);" id="k_photoTB" name="k_photoTB" type="file">'
                                                +'<button class="btn-file"></button>'
                                            +'</div>'
                                            +'<img width="150" id="previmg" src="../img/no_image.jpg" >'
                                        +'</div>'
                                    +'</div>'

                                    // kode
                                    +'<div class="row">'
                                        +'<div class="span5">'
                                            +'<label>Kode Katalog</label>'
                                            +'<div class="input-control text">'
                                                +'<input maxlength="3" class="span1" placeholder="kode"  required type="text" name="k_kodeTB" id="k_kodeTB">'
                                                +'<button class="btn-clear"></button>'
                                            +'</div>'
                                        +'</div>'
                                        +'<div class="span5"> '
                                        +'</div>'
                                    +'</div>'

                                    // Nama
                                    +'<div class="row">'
                                        +'<div class="span5">'
                                            +'<label>Nama</label>'
                                            +'<div class="input-control text">'
                                                +'<input placeholder="nama"  required type="text" name="k_namaTB" id="k_namaTB">'
                                                +'<button class="btn-clear"></button>'
                                            +'</div>'
                                        +'</div>'
                                        +'<div class="span5"> '
                                        +'</div>'
                                    +'</div>'

                                    // Jenis
                                    +'<div class="row">'
                                        +'<div class="span5">'
                                            +'<label>Jenis</label>'
                                            +'<div class="input-control select">'
                                                +'<select required name="k_jenisTB" id="k_jenisTB"><option value="">Pilih Jenis Barang</option></select>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'

                                    // Penyusutan
                                    +'<div class="row">'
                                        +'<div class="span5">'
                                            +'<label>Penyusutan</label>'
                                            +'<div class="input-control text">'
                                                +'<input class="span1" placeholder="susut"  required type="text" name="k_susutTB" id="k_susutTB">'
                                                +'<button class="btn-clear"></button>&nbsp;&nbsp;% per tahun'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'

                                    +'<div class="row">'
                                        +'<div class="span5"> '
                                            +'<div class="form-actions">' 
                                                +'<button class="button primary">simpan</button>&nbsp;'
                                                +'<button class="button" type="button" onclick="$.Dialog.close()">Batal</button> '
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'
                                +'</form>'
                        +'</div>';

            cmbtahunbuku('filter','');            
            // cmbtahunbuku('filter','');

        // button action
            //add---------
            $("#a_tambahBC").on('click', function(){ // grup form 
                anggaranFR('');
            });$("#k_tambahBC").on('click', function(){ // katalog
                katalogFR('');
            });$("#b_tambahBC").on('click', function(){ // barang
                barangFR('');
            });
            //edit------- 
            $('#b_ubahBC').on('click',function(){
                katalogFR($('#b_katalogS').val());
            });
            //print----
            $('#a_cetakBC').on('click',function(){
                printPDF('grup');
            });$('#k_cetakBC').on('click',function(){
                printPDF('katalog');
            });$('#b_cetakBC').on('click',function(){
                printPDF('barang');
            });

            // search 
            //kategori anggaran ----
            $('#a_cariBC').on('click',function(){
                $('#a_cariTR').toggle('slow');
                $('#a_namaS').val('');
                $('#a_nominalS').val('');
                $('#a_keteranganS').val('');
            });
            //katalog----
            $('#k_cariBC').on('click',function(){
                $('#k_cariTR').toggle('slow');
                $('#k_kodeS').val('');
                $('#k_namaS').val('');
                $('#k_keteranganS').val('');
            });
            // barang----
            $('#b_cariBC').on('click',function(){
                $('#b_cariTR').toggle('slow').addClass('info').setTimeout(function(){
                    $('#b_cariTR').removeClass('info');
                },2000);
                $('#b_kodeS').val('');
                $('#b_barkodeS').val('');
                $('#b_namaS').val('');
                $('#b_keteranganS').val('');
            });

        //search action 
            // anggaran
            $('#a_departemenS,#a_tahunbukuS').on('change',function (e){ // lokasi
                vwAnggaran();
            });
            $('#a_namaS,#a_keteranganS,#a_nominalS').on('keydown',function (e){ // kode grup
                if(e.keyCode == 13)
                    vwAnggaran();
            });
            // $('#g_namaS').on('keydown',function (e){ // nama grup
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });$('#g_utotalS').on('keydown',function (e){ // keterangan
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });$('#g_utersediaS').on('keydown',function (e){ // keterangan
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });$('#g_udipinjamS').on('keydown',function (e){ // keterangan
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });$('#g_totasetS').on('keydown',function (e){ // keterangan
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });$('#g_keteranganS').on('keydown',function (e){ // keterangan
            //     if(e.keyCode == 13)
            //         vwGrup($('#g_lokasiS').val());
            // });

            // katalog barang
            $('#k_kodeS').on('keydown',function (e){ // kode grup
                if(e.keyCode == 13)
                    vwKatalog($('#k_grupS').val());
            });$('#k_namaS').on('keydown',function (e){ // nama grup
                if(e.keyCode == 13)
                    vwKatalog($('#k_grupS').val());
            });$('#k_keteranganS').on('keydown',function (e){ // keterangan
                if(e.keyCode == 13)
                    vwKatalog($('#k_grupS').val());
            });

            // unit barang
            $('#b_kondisiS').on('change',function(){
                vwBarang($('#b_katalogS').val());
            });
            $('#b_kodeS').on('keydown',function (e){ // kode grup
                if(e.keyCode == 13)
                    vwBarang($('#b_katalogS').val());
            });$('#b_namaS').on('keydown',function (e){ // nama grup
                if(e.keyCode == 13)
                    vwBarang($('#b_katalogS').val());
            });$('#b_barkodeS').on('keydown',function (e){ // nama grup
                if(e.keyCode == 13)
                    vwBarang($('#b_katalogS').val());
            });$('#b_sumberS').on('change',function (){ // nama grup
                vwBarang($('#b_katalogS').val());
            });$('#b_hargaS').on('keydown',function (e){ // nama grup
                if(e.keyCode == 13)
                    vwBarang($('#b_katalogS').val());
            });$('#b_kondisiS').on('change',function (){ // nama grup
                vwBarang($('#b_katalogS').val());
            });$('#b_statusS').on('change',function (){ // nama grup
                vwBarang($('#b_katalogS').val());
            });$('#b_keteranganS').on('keydown',function (e){ // keterangan
                if(e.keyCode == 13)
                    vwBarang($('#b_katalogS').val());
            });

        // switch panel
            switchPN(1);
            // back button
            $('#k_grupBC').on('click',function(){ // << grup
                cmblokasi();
                switchPN(1);
            });$('#b_katalogBC').on('click',function(){ // << katalog
                // vwKatalog($('#g_lokasiS').val());
                vwKatalog($('#k_grupS').val());
                switchPN(2);
            });
    }); 
// end of main function ---
    
    
//paging ---
    function pagination(page,aksix,subaksi){ 
        var aksi ='aksi='+aksix+'&subaksi='+subaksi+'&starting='+page;
        var cari ='';
        var el,el2;

        if(subaksi!=''){ // multi paging 
            el  = '.'+subaksi+'_cari';
            el2 = '#'+subaksi+'_tbody';
        }else{ // single paging
            el  = '.cari';
            el2 = '#tbody';
        }

        $(el).each(function(){
            var p = $(this).attr('id');
            var v = $(this).val();
            cari+='&'+p+'='+v;
        });

        $.ajax({
            url:dir,
            type:"post",
            data: aksi+cari,
            beforeSend:function(){
                $(el2).html('<tr><td align="center" colspan="8"><img src="img/w8loader.gif"></td></tr></center>');
            },success:function(dt){
                setTimeout(function(){
                    $(el2).html(dt).fadeIn();
                },1000);
            }
        });
    }
//end of paging ---

// switch panel
    function switchPN (e) {
        $.each($('.panelx'),function(id,item){
            var ke = id+1;
            if(ke==e){
                $('#panel'+ke).removeAttr('style');
                $('h4').html($(this).attr('title'));
            }else{
                $('#panel'+ke).attr('style','display:none;');
            }
        });
    }
//end of  switch panel

/*view*/
    // kategori anggaran ---
        function vwAnggaran(){  
            var aksi ='aksi=tampil&subaksi=anggaran';
            var cari ='&a_departemenS='+$('#a_departemenS').val()
                    +'&a_tahunbukuS='+$('#a_tahunbukuS').val()
                    +'&a_namaS='+$('#a_namaS').val()
                    +'&a_nominalS='+$('#a_nominalS').val()
                    +'&a_keteranganS ='+$('#a_keteranganS').val();

            $.ajax({
                url : dir,
                type: 'post',
                data: aksi+cari,
                beforeSend:function(){
                    $('#anggaran_tbody').html('<tr><td align="center" colspan="8"><img src="img/w8loader.gif"></td></tr></center>');
                },success:function(dt){
                    setTimeout(function(){
                        $('#anggaran_tbody').html(dt).fadeIn();
                    },1000);
                }
            });
        }
    // end of kategori anggaran  ---

    // katalog barang
        // function vwKatalog(id) {
        //     var aksi ='aksi=tampil&subaksi=katalog&k_grupS='+id;
        //     var cari ='&k_kodeS='+$('#k_kodeS').val()
        //             +'&k_namaS='+$('#k_namaS').val()
        //             +'&k_keteranganS='+$('#k_keteranganS').val();
        //             // alert(aksi+cari);
        //     $.ajax({
        //         url : dir,
        //         type: 'post',
        //         data: aksi+cari,
        //         beforeSend:function(){
        //             $('#katalog_tbody').html('<tr><td align="center" colspan="8"><img src="img/w8loader.gif"></td></tr></center>');
        //         },success:function(dt){
        //             $('#k_grupS').val(id);
        //             switchPN(2);
        //             vwHeadKatalog(id);
        //             setTimeout(function(){
        //                 $('#katalog_tbody').html(dt).fadeIn();
        //             },1000);
        //         }
        //     });
        // }   
    //end of  katalog barang

    // barang
        // function vwBarang(id) {
        //     switchPN(3);
        //     var aksi ='aksi=tampil&subaksi=barang&b_katalogS='+id;
        //     var cari ='&b_kodeS='+$('#b_kodeS').val()
        //             +'&b_barkodeS='+$('#b_barkodeS').val()
        //             +'&b_hargaS='+$('#b_hargaS').val()
        //             +'&b_sumberS='+$('#b_sumberS').val()
        //             +'&b_kondisiS='+$('#b_kondisiS').val()
        //             +'&b_statusS='+$('#b_statusS').val()
        //             +'&b_keteranganS='+$('#b_keteranganS').val();
        //     $.ajax({
        //         url : dir,
        //         type: 'post',
        //         data: aksi+cari,
        //         beforeSend:function(){
        //             $('#barang_tbody').html('<tr><td align="center" colspan="9"><img src="img/w8loader.gif"></td></tr></center>');
        //         },success:function(dt){
        //             $('#b_katalogS').val(id);
        //             vwHeadBarang(id);
        //             switchPN(3);
        //             setTimeout(function(){
        //                 $('#barang_tbody').html(dt).fadeIn();
        //             },1000);
        //         }
        //     });
        // }   
    //end of barang

/*save (insert & update)*/
    //grup ---
        function anggaranSV(){
            var urlx ='&aksi=simpan&subaksi=anggaran';
            // edit mode
            if($('#a_idformH').val()!=''){
                urlx += '&replid='+$('#a_idformH').val();
            }
            $.ajax({
                url:dir,
                cache:false,
                type:'post',
                dataType:'json',
                data:$('form').serialize()+urlx,
                success:function(dt){
                    if(dt.status!='sukses'){
                        cont = 'Gagal menyimpan data';
                        clr  = 'red';
                    }else{
                        $.Dialog.close();
                        gkosongkan();
                        vwAnggaran();
                        cont = 'Berhasil menyimpan data';
                        clr  = 'green';
                    }notif(cont,clr);
                }
            });
        }
    //end grup  ---

    //barang ---
        // function barangSV(){
        //     var urlx ='&aksi=simpan&subaksi=barang';
        //     // edit mode
        //     if($('#b_idformH').val()!='')
        //         urlx += '&replid='+$('#b_idformH').val();

        //     $.ajax({
        //         url:dir,
        //         cache:false,
        //         type:'post',
        //         dataType:'json',
        //         data:$('form').serialize()+urlx,
        //         success:function(dt){
        //             if(dt.status!='sukses'){
        //                 cont = 'Gagal menyimpan data';
        //                 clr  = 'red';
        //             }else{
        //                 $.Dialog.close();
        //                 kkosongkan();
        //                 vwBarang($('#b_katalogS').val());
        //                 cont = 'Berhasil menyimpan data';
        //                 clr  = 'green';
        //             }notif(cont,clr);
        //         }
        //     });
        // }
    //end of barang ---

    //katalog  ---
        //preview image sebelum upload -------
            // function PreviewImage(e){
            //     var typex   = e.files[0].type;
            //     var sizex   = e.files[0].size;
            //     var namex   = e.files[0].name;
                
            //     if(typex =='image/png'||typex =='image/jpg'||typex =='image/jpeg'|| typex =='image/gif'){ //validasi format
            //         if(sizex>(900*900)){ //validasi size
            //             notif('ukuran max 1 MB','red');
            //             $(e).val('');
            //             return false;   
            //         }else{ 
            //             $('#previmg').attr('src','../img/w8loader.gif');
            //             var reader = new FileReader();
            //             reader.readAsDataURL(e.files[0]);
            
            //             reader.onload = function (oFREvent){
            //                 var urlx  = oFREvent.target.result;
            //                 setTimeout(function(){
            //                     $('#previmg').attr('src',urlx);//.removeAttr('style');
            //                 },1000);
            //             };
            //         }
            //     }else{ // format salah
            //         $('#previmg').attr('src','<img src="../img/loader.gif">');
            //         $(e).val('');
            //         notif('hanya format gambar(jpeg,jpg,png)','red');
            //         return false;
            //     }
            // };
        //end of preview image sebelum upload -------

        // submit katalog ---------------------------
            // function katalogSV () {
            //     //add image
            //     var files =new Array();
            //     $("input:file").each(function() {
            //         files.push($(this).get(0).files[0]); 
            //     });
                 
            //     // Create a formdata object and add the files
            //     var filesAdd = new FormData();
            //     $.each(files, function(key, value){
            //         filesAdd.append(key, value);
            //     });

            //     if($('#k_photoTB').val()=='')//upload
            //         katalogDb('');
            //     else// ga upload
            //         katalogUp(filesAdd);
            // }
        //end of submit katalog ---------------------------

        // upload image
            // function katalogUp(dataAdd){
            //     $.ajax({
            //         url: dir+'?upload',
            //         type: 'POST',
            //         data: dataAdd,
            //         cache: false,
            //         dataType: 'json',
            //         processData: false,// Don't process the files
            //         contentType: false,//Set content type to false as jq 'll tell the server its a query string request
            //         success: function(data, textStatus, jqXHR){
            //             if(data.status == 'sukses'){ //gak error
            //                 katalogDb(data);
            //             }else{ //error
            //                 notif(data.status,'red');
            //             }
            //         },error: function(jqXHR, textStatus, errorThrown){
            //             notif('error'+textStatus,'red');// $('#loadarea').html('<img src="../img/loader.gif"> ').fadeOut();
            //         }
            //     });
            // }
        //end of upload image

        // simpan ke database
            // function katalogDb(filex){
            //     var formData = $('#katalogFR').serialize();
            //     if($('#k_idformH').val()!=''){
            //         formData +='&replid='+$('#k_idformH').val();
            //     }

            //     if(filex!=''){// ada upload file nya
            //         formData +='&file='+filex.file ;	
            //         if($('#k_photoH').val()!=''){
            //         	formData+='&photo_asal='+$('#k_photoH').val();
            //         }
            //     }
            //     // alert(formData);return false;
            //     $.ajax({
            //         url: dir,
            //         type:'POST',
            //         data:formData+'&aksi=simpan&subaksi=katalog',
            //         cache:false,
            //         dataType: 'json',
            //         success: function(data, textStatus, jqXHR){
            //             if(data.status != 'sukses')
            //                notif(data.status,'red');
            //             else
            //                notif(data.status,'green'); 
            //         },error: function(jqXHR, textStatus, errorThrown){
            //             console.log('ERRORS savedata2: ' + textStatus);
            //         },complete: function(){
            //             $.Dialog.close(); 
            //             vwKatalog($('#k_grupS').val());
            //             kkosongkan();
            //         }
            //     });
            // }
        // end of simpan ke database


/*delete*/
    //grup  ---
        function anggaranDel(id){
            if(confirm('melanjutkan untuk menghapus data?'))
            $.ajax({
                url:dir,
                type:'post',
                data:'aksi=hapus&subaksi=anggaran&replid='+id,
                dataType:'json',
                success:function(dt){
                    var cont,clr;
                    if(dt.status!='sukses'){
                        cont = '..Gagal Menghapus '+dt.terhapus+' ..';
                        clr  ='red';
                    }else{
                        vwAnggaran();
                        cont = '..Berhasil Menghapus '+dt.terhapus+' ..';
                        clr  ='green';
                    }notif(cont,clr);
                }
            });
        }
    //end of grup ---
    
    //katalog ---
        // function katalogDel(id){
        //     if(confirm('melanjutkan untuk menghapus data?'))
        //     $.ajax({
        //         url:dir,
        //         type:'post',
        //         data:'aksi=hapus&subaksi=katalog&replid='+id,
        //         dataType:'json',
        //         success:function(dt){
        //             var cont,clr;
        //             if(dt.status!='sukses'){
        //                 cont = '..Gagal Menghapus '+dt.terhapus+' ..';
        //                 clr  ='red';
        //             }else{
        //                 vwKatalog($('#k_grupS').val());
        //                 cont = '..Berhasil Menghapus '+dt.terhapus+' ..';
        //                 clr  ='green';
        //             }notif(cont,clr);
        //         }
        //     });
        // }
    //end of katalog ---

    //barang ---
        // function barangDel(id){
        //     if(confirm('melanjutkan untuk menghapus data?'))
        //     $.ajax({
        //         url:dir,
        //         type:'post',
        //         data:'aksi=hapus&subaksi=barang&replid='+id,
        //         dataType:'json',
        //         success:function(dt){
        //             var cont,clr;
        //             if(dt.status!='sukses'){
        //                 cont = '..Gagal Menghapus '+dt.terhapus+' ..';
        //                 clr  ='red';
        //             }else{
        //                 vwBarang($('#b_katalogS').val());
        //                 cont = '..Berhasil Menghapus '+dt.terhapus+' ..';
        //                 clr  ='green';
        //             }notif(cont,clr);
        //         }
        //     });
        // }
    //end of barang ---

/*form (insert & update)*/
    // form kategori anggaran ---
        function anggaranFR(id){
            gkosongkan();
            $.Dialog({
                shadow: true,
                overlay: true,
                draggable: true,
                width: 500,
                padding: 10,
                onShow: function(){
                    var titlex;
                    if(id==''){  //add mode
                        titlex='<span class="icon-plus-2"></span> Tambah ';
                        cmbdepartemen('form',$('#a_departemenS').val());
                        cmbtahunbuku('form',$('#a_tahunbukuS').val());
                    }else{ // edit mode
                        titlex='<span class="icon-pencil"></span> Ubah';
                        $.ajax({
                            url:dir,
                            data:'aksi=ambiledit&subaksi=anggaran&replid='+id,
                            type:'post',
                            dataType:'json',
                            success:function(dt){
                                $('#a_idformH').val(id);
                                $('#a_departemenH').val(dt.iddepartemen); 
                                $('#a_tahunbukuH').val(dt.idtahunbuku); 
                                $('#a_departemenTB').val(dt.departemen); 
                                $('#a_tahunbukuTB').val(dt.tahunbuku); 
                                $('#a_nominalTB').val(dt.nominal);
                                $('#a_namaTB').val(dt.nama);
                                $('#a_keteranganTB').val(dt.keterangan);
                            }
                        });//end of  data grup--------------------------
                    }$.Dialog.title(titlex+' '+mnu); // edit by epiii
                    $.Dialog.content(a_contentFR);
                }
            });
        }
    // end of form grup ---

    // form katalog---
        function katalogFR(id){
            kkosongkan();
            $.Dialog({
                shadow: true,
                overlay: true,
                draggable: true,
                width: 500,
                padding: 10,
                onShow: function(){
                    var titlex;
                    if(id==''){  //add mode
                        titlex='<span class="icon-plus-2"></span> Tambah ';
                        // form :: jenis  ----------------------------------------
                        $.ajax({
                            url:dir4,
                            data:'aksi=cmbjenis',
                            type:'post',
                            dataType:'json',
                            success:function(dt){
                                var opt='';
                                $.each(dt.jenis,function(id,item){
                                    opt+='<option value="'+item.replid+'">'+item.nama+'</option>';
                                });$('#k_jenisTB').html('<option value="">Pilih Jenis</option>'+opt);
                                $('#k_lokasiTB').val($('#k_lokasiDV').html());
                                $('#k_grupH2').val($('#k_grupS').val());
                                $('#k_grupTB').val($('#k_grupDV').html());
                            }
                        });// end of form :: lokasi (disabled)
                    }else{ // edit mode
                        titlex='<span class="icon-pencil"></span> Ubah';
                        // fetch katalog's data ------------------ 
                        $.ajax({
                            url:dir,
                            data:'aksi=ambiledit&subaksi=katalog&replid='+id,
                            type:'post',
                            dataType:'json',
                            success:function(dt){
                                if(dt.status!='sukses'){
                                    notif(dt.status,'red');
                                }else{
                                    $('#k_idformH').val(id);
                                    $('#k_grupH2').val($('#k_grupS').val());
                                    $('#k_lokasiTB').val($('#k_lokasiDV').html());
                                    $('#k_grupTB').val($('#k_grupDV').html());
                                    $('#k_kodeTB').val(dt.data.kode);
                                    $('#k_namaTB').val(dt.data.nama);
                                    $('#k_susutTB').val(dt.data.susut);
                                    $('#k_keteranganTB').val(dt.data.keterangan);
                                    var img;
                                    if(dt.data.photo2!='' && dt.data.photo2!=null){//ada gambar
                                        img='../img/upload/'+dt.data.photo2;
                                    }else{
                                        img='../img/no_image.jpg';
                                    }
                                    $('#previmg').attr('src',img);
                                    $('#k_photoH').val(dt.data.photo2);
                                    // combo jenis -----------------------
                                    $.ajax({
                                        url:dir4,
                                        type:'post',
                                        dataType:'json',
                                        data:'aksi=cmbjenis',
                                        success:function(dt2){
                                            if(dt2.status!='sukses'){
                                                notif(dt2.status, 'red');
                                            }else{
                                                var opt='';
                                                $.each(dt2.jenis,function(id,item){
                                                    if(dt.data.jenis==item.replid)
                                                        opt+='<option selected="selected" value="'+item.replid+'">'+item.nama+'</option>';
                                                    else
                                                        opt+='<option value="'+item.replid+'">'+item.nama+'</option>';
                                                });$('#k_jenisTB').html(opt);
                                            }
                                        }
                                    });// end of combo jenis -----------------------
                                }

                            }
                        });// end of fetch katalog's data ------------------ 
                    }$.Dialog.title(titlex+' '+mnu3); // edit by epiii
                    $.Dialog.content(k_contentFR);
                }
            });
        }
    // end of form katalog---

    // form barang---
        function barangFR(id){
            kkosongkan();
            $.Dialog({
                shadow: true,
                overlay: true,
                draggable: true,
                width: 500,
                padding: 10,
                onShow: function(){
                    var titlex;
                    if(id==''){  //add mode
                        titlex='<span class="icon-plus-2"></span> Tambah ';
                        cmbkondisi('form','');
                        cmbtempat('');
                        vwHeadBarang($('#b_katalogS').val());
                    }else{ // edit mode
                        bkosongkan();
                        titlex='<span class="icon-pencil"></span> Ubah';
                        // fetch katalog's data ------------------ 
                        $.ajax({
                            url:dir,
                            data:'aksi=ambiledit&subaksi=barang&replid='+id,
                            type:'post',
                            dataType:'json',
                            success:function(dt){
                                if(dt.status!='sukses'){
                                    notif(dt.status,'red');
                                }else{
                                    // $('#b_tempatTB').focus();
                                    $('#b_katalogTB').val($('#b_katalogDV').html());
                                    $('.jumbarang').attr('style','display:none;');
                                    $('#b_idformH').val(id);
                                    $('#b_urutH').val(dt.data.urut);
                                    $('#b_katalogH2').val($('#b_katalogS').val());
                                    $('#b_barkodeTB').val(dt.data.barkode);
                                    $('#b_kodeTB').val(dt.data.kode);
                                    $('#b_hargaTB').val(dt.data.harga);
                                    $('#b_keteranganTB').val(dt.data.keterangan);
                                    $.each($('input[name="b_sumberTB"]'),function(){
                                        if(dt.data.sumber==$(this).val())
                                            $(this).attr('checked',true);
                                    });cmbkondisi('form',dt.data.kondisi);
                                    cmbtempat(dt.data.tempat);
                                }
                            }
                        });// end of fetch katalog's data ------------------ 
                    }$.Dialog.title(titlex+' '+mnu5);
                    $.Dialog.content(b_contentFR);
                }
            });
        }
    // end of form barang---

/*headinfo*/
    // katalog
        function vwHeadKatalog (id) {
            $.ajax({
                url:dir,
                type:'post',
                dataType:'json',
                data:'aksi=headinfo&subaksi=katalog&grup='+id,
                success:function (dt) {
                    if (dt.status!='sukses') {
                        alert(dt.status+' memuat data header');
                    }else{
                        $('#k_grupDV').html(dt.grup);
                        $('#k_lokasiDV').html(dt.lokasi);
                        $('#k_totasetDV').html('Rp. '+dt.totaset+',-');
                    }
                },
            });
        }
    //end of katalog

    // unit barang
        function vwHeadBarang (id) {
            $.ajax({
                url:dir,
                type:'post',
                dataType:'json',
                data:'aksi=headinfo&subaksi=barang&katalog='+id,
                success:function (dt) {
                    if (dt.status!='sukses') {
                        notif(dt.status,'red');
                    }else{
                        $('#b_katalogDV').html(dt.data.katalog);
                        $('#b_grupDV').html(dt.data.grup);
                        $('#b_lokasiDV').html(dt.data.lokasi);
                        $('#b_totbarangDV').html(dt.data.totbarang+' unit');
                        $('#b_totasetDV').html('Rp. '+dt.data.totaset+',-');
                        $('#b_susutDV').html(dt.data.susut+' %');
                        $('#b_namaTB').html(dt.data.katalog);
                        var img;
                        if(dt.data.photo2!=''){
                            img='../img/upload/'+dt.data.photo2;
                        }else{
                            img='../img/no_image.jpg';
                        }
                        
                        $('#b_photoIMG').attr('src',img);

                        $('#b_katalogH2').val(id);
                        $('#b_katalogTB').val(dt.data.katalog);
                    }
                },
            });
        }
    //end of unit barang

/*reset form*/
    //grup  ---
        function gkosongkan(){
            $('#idformTB').val('');
            $('#g_kodeTB').val('');
            $('#g_namaTB').val('');
            $('#g_utotalTB').val('');
            $('#g_utersediaTB').val('');
            $('#g_udipinjamTB').val('');
            $('#g_keteranganTB').val('');
        }
    //end of grup ---

    //katalog  ---
        function kkosongkan(){
            $('#k_idformTB').val('');
            $('#k_lokasiTB').val('');
            $('#k_grupTB').val('');
            $('#k_kodeTB').val('');
            $('#k_namaTB').val('');
            $('#k_jenisTB').val('');
            $('#k_susutTB').val('');
            $('#k_photoTB').val('');
        }
    //end of katalog ---

    //barang  ---
        function bkosongkan(){
            $('#k_idformTB').val('');
            $('#b_tempatB').val('');
            $('#b_barkodeTB').val('');
            $('#b_kodeTB').val('');
            $('#b_hargaTB').val('');
            $('#b_kondisiTB').val('');
            $('input[name="b_sumberTB"]').val('');
            $('#b_keteranganTB').val('');
        }
    //end of barang ---


/*combo box*/
    //tahun buku  ---
        function cmbtahunbuku(typ,thn){
            var replid='';
            var tipe = typ;
            if(typ='form' && thn!='')
                replid='&replid='+thn;

            $.ajax({
                url:dir2,
                data:'aksi=cmb'+mnu2+replid,
                dataType:'json',
                type:'post',
                success:function(dt){
                    var out='';
                    if(dt.status!='sukses'){
                        out+='<option value="">'+dt.status+'</option>';
                    }else{
                        $.each(dt.tahunbuku, function(id,item){
                            if(item.aktif==1)
                                out+='<option selected="selected" value="'+item.replid+'">'+item.nama+' (aktif)</option>';
                            else
                                out+='<option value="'+item.replid+'">'+item.nama+'</option>';
                        });
                        if(tipe=='form'){
                            $('#a_tahunbukuH').val(dt.tahunbuku[0].replid);
                            $('#a_tahunbukuTB').val(dt.tahunbuku[0].nama);
                        }else{
                            $('#a_tahunbukuS').html(out);
                            cmbdepartemen('filter','');
                        }
                    }
                }
            });
        }
    //end of departemen ---

    // departemen ---
        function cmbdepartemen(typ,dep){
            var replid ='';
            var tipe =typ;
            if (typ=='form' && dep!=='')
                replid = '&replid='+dep;
            
            $.ajax({
                url:dir3,
                data:'aksi=cmb'+mnu3+replid,
                dataType:'json',
                type:'post',
                success:function(dt){
                    var out='';
                    if(dt.status!='sukses'){
                        out+='<option value="">'+dt.status+'</option>';
                    }else{
                        $.each(dt.departemen, function(id,item){
                            out+='<option value="'+item.replid+'">'+item.nama+'</option>';
                        });
                        if(tipe=='form'){
                            $('#a_departemenTB').val(dt.departemen[0].nama);
                            $('#a_departemenH').val(dt.departemen[0].replid);
                        }else{
                            $('#a_departemenS').html(out);
                            vwAnggaran(); 
                        }
                    }
                }
            });
        }
    //end of departemen ---

    // Kondisi
        // function cmbkondisi (typ,replid) {
        //     $.ajax({
        //         url:dir6,
        //         type:'post',
        //         dataType:'json',
        //         data:'aksi=cmb'+mnu6,
        //         success:function(dt){
        //             var opt='';
        //             if (dt.status!='sukses') {
        //                 notif(dt.status,'red');
        //                 opt+='<option value="">'+dt.status+'</option>'
        //             }else{
        //                 $.each(dt.kondisi,function(id,item){
        //                     if(replid==item.replid)
        //                         opt+='<option selected="selected" value="'+item.replid+'">'+item.nama+'</option>'
        //                     else
        //                         opt+='<option value="'+item.replid+'">'+item.nama+'</option>'
        //                 });
        //                 if(typ=='search'){// search
        //                     $('#b_kondisiS').html('<option value="">-Semua-</option>'+opt);
        //                 }else{//form
        //                     $('#b_kondisiTB').html('<option value="">Pilih Kondisi ...</option>'+opt);
        //                 }
        //             }
        //         },
        //     });
        // }
    // end of Kondisi
    
    // tempat
        // function cmbtempat (id) {
        function cmbtempat (tempat) {
            $.ajax({
                url:dir7,   
                type:'post',
                dataType:'json',
                data:'aksi=cmb'+mnu7+'&lokasi='+$('#g_lokasiS').val(),
                success:function(dt){
                    var opt='';
                    if (dt.status!='sukses') {
                        notif(dt.status,'red');
                        opt+='<option value="">'+dt.status+'</option>'
                    }else{
                        // alert(id);return false;
                        $.each(dt.tempat,function(id,item){
                            if(tempat==item.replid)
                                opt+='<option selected="selected" value="'+item.replid+'">'+item.nama+'</option>'
                            else
                                opt+='<option value="'+item.replid+'">'+item.nama+'</option>'
                        });$('#b_tempatTB').html('<option value="">Pilih Tempat ..</option>'+opt);
                    }
                },
            });
        }
    // end of Kondisi

function tempatupdate (e) {
    $('#b_tempatTB').val($(e).val());
    if($('#b_idformH').val()!='') //edit
        kodegenerate($('#b_idformH').val());
    else //add
        kodegenerate('');
}

function jumupdate (e) {
    $('#b_jumbarangTB').val($(e).val());
    if($('#b_idformH').val()!='') //edit
        kodegenerate($('#b_idformH').val());
    else //add
        kodegenerate('');
}

// form :: generate barcode & kode ----------------- 
    function kodegenerate (idform) {
        var tempat  = $('#b_tempatTB').val();
        var jum     = $('#b_jumbarangTB').val();
        var katalog = $('#b_katalogH2').val();

        $.ajax({
            url:dir,
            type:'post',
            dataType:'json',
            data:'aksi=kodegenerate&tempat='+tempat+'&katalog='+katalog+'&replid='+idform,
            success:function(dt){
                var kode;
                if(jum>1){
                    kode = '[auto]';
                }else{
                    kode = dt.data.barkode;
                }$('#b_urutH').val(dt.data.urut);
                $('#b_barkodeTB').val(kode);
                $('#b_kodeTB').val(dt.data.lokasi+'/'+dt.data.grup+'/'+dt.data.tempat+'/'+dt.data.katalog+'/'+kode);
            },
        });
    }
// end of form :: generate barcode & kode ----------------- 



// input uang --------------------------
    function inputuang(e) {
        $(e).maskMoney({
            precision:0,
            prefix:'Rp. ', 
            // allowNegative: true, 
            thousands:'.', 
            // decimal:',', 
            affixesStay: true
        });
    }
// end of input uang --------------------------

// get uang --------------------------
    function getuang(e) {
        // var x =$(e).maskMoney('unmasked')[0];
        var x =$(e).val();
        var y = x.replace(/[r\.]/g, '');
        return y;
    }
// end of get uang --------------------------

// notifikasi
    function notif(cont,clr) {
        var not = $.Notify({
            caption : "<b>Notifikasi</b>",
            content : cont,
            timeout : 3000,
            style :{
                background: clr,
                color:'white'
            },
        });
    }
// end of notifikasi

//end of  print to PDF -------
    function printPDF(mn){
        var par='',tok='',p,v;
        $('.'+mn+'_cari').each(function(){
            p=$(this).attr('id');
            v=$(this).val();
            par+='&'+p+'='+v;
            tok+=v;
        });var x  = $('#id_loginS').val();
        var token = encode64(x+tok);
        window.open('report/r_'+mn+'.php?token='+token+par,'_blank');
    }
//end of  print to PDF -------

    // ---------------------- //
    // -- created by epiii -- //
    // ---------------------- // 
