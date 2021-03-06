<?php
	session_start();
	require_once '../../lib/dbcon.php';
	require_once '../../lib/func.php';
	require_once '../../lib/pagination_class.php';
	require_once '../../lib/tglindo.php';
	// require_once '../../lib/excel_reader2.php';
	$mnu               = 'calonsiswa';
	$mnu_ayah          = 'calonsiswa_ayah';
	$mnu_ibu           = 'calonsiswa_ibu';
	$mnu_keluarga      = 'calonsiswa_keluarga';
	$mnu_kontakdarurat = 'calonsiswa_kontakdarurat';
	$mnu_saudara       = 'calonsiswa_saudara';
	$tb                = 'psb_'.$mnu;
	$tb_ayah           = 'psb_'.$mnu_ayah;
	$tb_ibu            = 'psb_'.$mnu_ibu;
	$tb_keluarga       = 'psb_'.$mnu_keluarga;
	$tb_kontakdarurat  = 'psb_'.$mnu_kontakdarurat;
	$tb_saudara        = 'psb_'.$mnu_saudara;
	// $out=array();

	if(!isset($_POST['aksi'])){
		$out=json_encode(array('status'=>'invalid_no_post'));		
		// $out=['status'=>'invalid_no_post'];		
	}else{
		switch ($_POST['aksi']) {
			// -----------------------------------------------------------------
			case 'tampil':
				// $tahunajaran = trim($_POST['tahunajaranS'])?filter($_POST['tahunajaranS']):'';
				$nopendaftaran = isset($_POST['nopendaftaranS'])?filter($_POST['nopendaftaranS']):'';
				$nama          = isset($_POST['namaS'])?filter($_POST['namaS']):'';
				$sql = 'SELECT *
						FROM '.$tb.' 							
						ORDER 
							BY nopendaftaran asc';
				// print_r($sql);exit();
				if(isset($_POST['starting'])){ //nilai awal halaman
					$starting=$_POST['starting'];
				}else{
					$starting=0;
				}
				// $menu='tampil';	
				$recpage= 5;//jumlah data per halaman
				$aksi    ='tampil';
				$subaksi ='';
				// $obj 	= new pagination_class($menu,$sql,$starting,$recpage);
				$obj 	= new pagination_class($sql,$starting,$recpage,$aksi, $subaksi);

				// $obj 	= new pagination_class($menu,$sql,$starting,$recpage);
				// $obj 	= new pagination_class($sql,$starting,$recpage);
				$result =$obj->result;

				#ada data
				$jum	= mysql_num_rows($result);
				$out ='';
				if($jum!=0){	
					$nox 	= $starting+1;
					while($res = mysql_fetch_array($result)){	
						if($res['aktif']=1){
							$dis  = 'disabled';
							$ico  = 'checkmark';
							$hint = 'telah Aktif';
							$func = '';
						}else{
							$dis  = '';
							$ico  = 'blocked';
							$hint = 'Aktifkan';
							$func = 'onclick="aktifkan('.$res['replid'].');"';
						}
						
						$btn ='<td>
									<button data-hint="ubah"  onclick="Modal('.$res['replid'].');">
										<i class="icon-search on-left"></i>
									</button>
									<button data-hint="ubah"  onclick="viewFR('.$res['replid'].');">
										<i class="icon-pencil on-left"></i>
									</button>
									<button data-hint="hapus" onclick="del('.$res['replid'].');">
										<i class="icon-remove on-left"></i>
									</button>
								 </td>';
						$out.= '<tr>
									<td id="'.$mnu.'TD_'.$res['replid'].'">'.$res['nopendaftaran'].'</td>
									
									<td>'.$res['nama'].'</td>
									<td>'.number_format($res['sumpokok']).'</td>
									<td>'.number_format($res['disctb']).'</td>
									<td>'.number_format($res['discsaudara']).'</td>
									<td>'.number_format($res['disctunai']).'</td>
									<td>'.number_format($res['denda']).'</td>
									<td>'.number_format($res['sumnet']).'</td>
									<td>'.number_format($res['angsuran']).'</td>
									'.$btn.'
								</tr>';
						$nox++;
					}
				}else{ #kosong
					$out.= '<tr align="center">
							<td  colspan=10 ><span style="color:red;text-align:center;">
							... data tidak ditemukan...</span></td></tr>';
				}
				#link paging
				$out.= '<tr class="info"><td colspan=10>'.$obj->anchors.'</td></tr>';
				$out.='<tr class="info"><td colspan=10>'.$obj->total.'</td></tr>';
			break; 
			// view -----------------------------------------------------------------

			// add / edit -----------------------------------------------------------------
			case 'simpan':
				switch ($_POST['subaksi']) {
					case 'siswa':
						$siswa  = $tb.' set 	kriteria 		= "'.filter($_POST['kriteriaTB']).'",
												golongan      = "'.filter($_POST['golonganTB']).'",
												sumpokok      = "'.filter($_POST['uang_pangkalTB']).'",
												sumnet        = "'.filter($_POST['uang_pangkalnetTB']).'",
												sppbulan      = "'.filter($_POST['angsuranTB']).'",
												jmlangsur     = "'.filter($_POST['angsuranTB']).'",
												angsuran      = "'.filter($_POST['angsuranbulanTB']).'",
												disctb        = "'.filter($_POST['diskon_subsidiTB']).'",
												discsaudara   = "'.filter($_POST['diskon_saudaraTB']).'",
												disctunai     = "'.filter($_POST['diskon_tunaiTB']).'",
												disctotal     = "'.filter($_POST['diskon_totalTB']).'",
												nopendaftaran = "'.filter($_POST['nopendaftaranTB']).'",
												nama          = "'.filter($_POST['namaTB']).'",
												kelamin       = "'.filter($_POST['jkTB']).'",
												tmplahir      = "'.filter($_POST['tempatlahirTB']).'",
												tgllahir      = "'.filter($_POST['tgllahiranakTB']).'",
												agama         = "'.filter($_POST['agamaTB']).'",
												alamat        = "'.filter($_POST['alamatsiswaTB']).'",
												telpon        = "'.filter($_POST['telpsiswaTB']).'",
												sekolahasal   = "'.filter($_POST['asalsekolahTB']).'",
												darah         = "'.filter($_POST['goldarahTB']).'",
												kesehatan     = "'.filter($_POST['penyakitTB']).'",
												ketkesehatan  = "'.filter($_POST['catatan_kesehatanTB']).'"';
												// var_dump($siswa);exit();
												
						if (!isset($_POST['replid'])){ //add
						// if ($jumc==0){
							$tipex ='add';
							$siswa = 'INSERT INTO '.$siswa;
							// $sqayah = 'INSERT INTO '.$tb_ayah.' set '.$ayah;
							// $sqibu = 'INSERT INTO '.$tb_ibu.' set '.$ibu;
							// $sqdar = 'INSERT INTO '.$tb_kontakdarurat.' set '.$dar;
							// $sqkel = 'INSERT INTO '.$tb_keluarga.' set '.$keluarga;
						}else{ //edit
							$tipex ='edit';
							// $s=mysql_fetch_assoc(mysql_query('SELECT calonsiswa from psb_calonsiswa'));
							// $calonsiswa=$s['calonsiswa'];
							// $siswa = 'UPDATE '.$tb.' set '.$siswa.' WHERE calonsiswa='.$calonsiswa;
							// $sqayah = 'UPDATE '.$tb_ayah.' set '.$ayah.' WHERE calonsiswa='.$calonsiswa;
							// $sqibu = 'UPDATE '.$tb_ibu.' set '.$ibu.' WHERE calonsiswa='.$calonsiswa;
							// $sqdar = 'UPDATE '.$tb_kontakdarurat.' set '.$dar.' WHERE calonsiswa='.$calonsiswa;
							// $sqkel = 'UPDATE '.$tb_keluarga.' set '.$keluarga.' WHERE calonsiswa='.$calonsiswa;

						}									

						// $jumc= mysql_num_rows(mysql_query('SELECT * from psb_calonsiswa'));
						// var_dump($siswa);exit();
						$exa = mysql_query($siswa);
						$ida =  mysql_insert_id();
						if(!$exa){
							$out = '{"status":"gagal insert siswa"}';
						}else{
							$out = '{"status":"OK"}';
								// $siswa.=', calonsiswa 	= '.$ida;
							if (!isset($_POST['replid'])) { //add
							// if ($jumc==0) { //add
								$sqayah.=', calonsiswa 	= '.$ida;
								$sqibu.=', calonsiswa 	= '.$ida;
								$sqdar.=', calonsiswa 	= '.$ida;
								$sqkel.=', calonsiswa 	= '.$ida;
							}
							// else{
								$exayah= mysql_query($sqayah);
								if (!$exayah) {
									$out='{"status":"gagal ayah"}';
								} else {
									$exibu= mysql_query($sqibu);
									if (!$exibu) {
										$out='{"status":"gagal ibu"}';
									} else {
										$exdar= mysql_query($sqdar);
										if (!$exdar) {
											$out='{"status":"gagal kontak darurat"}';
										} else {
											$exkel= mysql_query($sqkel);
											if (!$exkel) {
												// var_dump($sqas);exit();
												$out='{"status":"gagal keluarga"}';
											} else {
												$out='{
														"status":"sukses"
													  }';
											} //keluarga
										}//kon darurat
									} //ibu
								}//ayah
							}//calon siswa
						echo $out;
					break;

				}
			// add / edit -----------------------------------------------------------------
			
			// delete -----------------------------------------------------------------
			case 'hapus':
				$d    = mysql_fetch_assoc(mysql_query('SELECT * from '.$tb.' where replid='.$_POST['replid']));
				$s    = 'DELETE from '.$tb.' WHERE replid='.$_POST['replid'];
				$e    = mysql_query($s);
				$stat = ($e)?'sukses':'gagal';
				$out  = json_encode(array('status'=>$stat,'terhapus'=>$d[$mnu]));
			break;
			// delete -----------------------------------------------------------------

			// ambiledit -----------------------------------------------------------------
			case 'ambiledit':
				$s 		= ' SELECT 
								t.*,
								t.nama as siswa,
								/* Data Ortu*/
								ta.nama as nama_ayah,
								ta.warga as kebangsaan_ayah,
								ta.tmplahir as tmplahir_ayah,
								ta.tgllahir as tgllahir_ayah,
								ta.pekerjaan as pekerjaan_ayah,
								ta.telpon as telpon_ayah,
								ta.pinbb as pinbb_ayah,
								ta.email as email_ayah,
								ti.nama as nama_ibu,
								ti.warga as kebangsaan_ibu,
								ti.tmplahir as tmplahir_ibu,
								ti.tgllahir as tgllahir_ibu,
								ti.pekerjaan as pekerjaan_ibu,
								ti.telpon as telpon_ibu,
								ti.pinbb as pinbb_ibu,
								ti.email as email_ibu,
								tk.nama as namalain,
								tk.hubungan as hubungan,
								tk.telpon as telponlain,
								tkel.*
							from 
								'.$tb.' t
								JOIN '.$tb_ayah.' ta ON ta.calonsiswa = t.replid
								JOIN '.$tb_ibu.' ti ON ti.calonsiswa = t.replid
								JOIN '.$tb_kontakdarurat.' tk ON tk.calonsiswa = t.replid
								JOIN '.$tb_keluarga.' tkel ON tkel.calonsiswa = t.replid
							WHERE 
								t.replid='.$_POST['replid'];

									// print_r($s);exit();
				$e 		= mysql_query($s) or die(mysql_error());
				$r 		= mysql_fetch_assoc($e);
				$stat 	= ($e)?'sukses':'gagal';
				$out    = json_encode(array(
							'status'          =>$stat,
							'kriteria'        =>$r['kriteria'],
							'golongan'        =>$r['golongan'],
							'sumpokok'        =>'Rp. '.number_format($r['sumpokok']),
							'sumnet'          =>$r['sumnet'],
							'sppbulan'        =>$r['sppbulan'],
							'jmlangsur'       =>$r['jmlangsur'],
							'angsuran'        =>$r['angsuran'],
							'disctb'          =>$r['disctb'],
							'discsaudara'     =>$r['discsaudara'],
							'disctunai'       =>$r['disctunai'],
							'disctotal'       =>$r['disctotal'],
							'nopendaftaran'   =>$r['nopendaftaran'],
							'siswa'            =>$r['siswa'],
							'kelamin'         =>$r['kelamin'],
							'tmplahir'        =>$r['tmplahir'],
							'tgllahir'        =>$r['tgllahir'],
							'agama'           =>$r['agama'],
							'alamat'          =>$r['alamat'],
							'telpon'          =>$r['telpon'],
							'sekolahasal'     =>$r['sekolahasal'],
							'darah'           =>$r['darah'],
							'kesehatan'       =>$r['kesehatan'],
							'ketkesehatan'    =>$r['ketkesehatan'],
							'photo'           =>$r['photo'],
							
							'nama_ayah'       =>$r['nama_ayah'],
							'kebangsaan_ayah' =>$r['kebangsaan_ayah'],
							'tmplahir_ayah'   =>$r['tmplahir_ayah'],
							'tgllahir_ayah'   =>$r['tgllahir_ayah'],
							'pekerjaan_ayah'  =>$r['pekerjaan_ayah'],
							'telpon_ayah'     =>$r['telpon_ayah'],
							'pinbb_ayah'      =>$r['pinbb_ayah'],
							'email_ayah'      =>$r['email_ayah'],
							
							'nama_ibu'        =>$r['nama_ibu'],
							'kebangsaan_ibu'  =>$r['kebangsaan_ibu'],
							'tmplahir_ibu'    =>$r['tmplahir_ibu'],
							'tgllahir_ibu'    =>$r['tgllahir_ibu'],
							'pekerjaan_ibu'   =>$r['pekerjaan_ibu'],
							'telpon_ibu'      =>$r['telpon_ibu'],
							'pinbb_ibu'       =>$r['pinbb_ibu'],
							'email_ibu'       =>$r['email_ibu'],
							
							'nama_dar'        =>$r['namalain'],
							'hubungan'        =>$r['hubungan'],
							'telpon'          =>$r['telponlain'],

							'kakek-nama'      =>$r['kakek-nama'],
							'nenek-nama'      =>$r['nenek-nama']
						));
			break;
			// ambiledit -----------------------------------------------------------------
			
			//detail siswa
			case 'detail':
				/*epiii*/
				/*tips :
					-definisikan satu2 select nya ( takut rancu ada nama field yang sama di lain tabel) (-_-)
					-inisialisasi nama tabel (FROM)ambil yg mudah saja : satu atau dua hurufawal  dri nama tabel
					-inisialisasi nama field (SELECT) samakan dengan id textbox form (view/controller ) ex : "kebangsaan_ayah" 
						query(model) = array/output(model) = ajax-success(controller) = textbox-form(view atau controller)   
				*/
				/*$s 		= ' SELECT
							
								cs.nama nama_siswa,
								cs.kelamin jk,
								cs.tmplahir tmp_lahir,
								cs.tgllahir tgl_lahir,
								cs.agama,
								cs.alamat,
								cs.telpon telepon,
								cs.darah goldarah,
								a.nama nama_ayah,
								a.warga kebangsaan_ayah,
								i.nama nama_ibu
	
							FROM
								psb_calonsiswa cs
								JOIN psb_calonsiswa_ayah a ON a.calonsiswa= cs.replid
								JOIN psb_calonsiswa_ibu  i ON i.calonsiswa = cs.replid
								JOIN psb_calonsiswa_kontakdarurat k ON k.calonsiswa = cs.replid
								JOIN psb_calonsiswa_keluarga kel ON kel.calonsiswa = cs.replid
							WHERE
								cs.replid = '.$_POST['replid']; */
								// print_r($s);exit();
				$s 		= ' SELECT 
								t.nama as nama_siswa,
								t.kelamin jk,
								t.templahir temp_lahir,
								t.tgllahir tgl_lahir,
								t.agama agama,
								t.alamat,
								t.telpon telepon,
								t.darah goldarah,
								t.kesehatan penyakit,
								/* Data Ortu*/
								ta.nama as nama_ayah,
								ta.warga as kebangsaan_ayah,
								ta.tmplahir as tmplahir_ayah,
								ta.tgllahir as tgllahir_ayah,
								ta.pekerjaan as pekerjaan_ayah,
								ta.telpon as telpon_ayah,
								ta.pinbb as pinbb_ayah,
								ta.email as email_ayah,
								ti.nama as nama_ibu,
								ti.warga as kebangsaan_ibu,
								ti.tmplahir as tmplahir_ibu,
								ti.tgllahir as tgllahir_ibu,
								ti.pekerjaan as pekerjaan_ibu,
								ti.telpon as telpon_ibu,
								ti.pinbb as pinbb_ibu,
								ti.email as email_ibu,
								tk.nama as namalain,
								tk.hubungan as hubungan,
								tk.telpon as telponlain,
								tkel.*
							from 
								'.$tb.' t
								JOIN '.$tb_ayah.' ta ON ta.calonsiswa = t.replid
								JOIN '.$tb_ibu.' ti ON ti.calonsiswa = t.replid
								JOIN '.$tb_kontakdarurat.' tk ON tk.calonsiswa = t.replid
								JOIN '.$tb_keluarga.' tkel ON tkel.calonsiswa = t.replid
							WHERE 
								t.replid='.$_POST['replid'];
				
				$e 		= mysql_query($s) or die(mysql_error());
				$r 		= mysql_fetch_assoc($e);
				$stat 	= ($e)?'sukses':'gagal';
				$out 	= json_encode(array(
							'status' =>$stat,
							'data'   =>array( // tambahi node array ('data')
							// data siswa 
								'nama_siswa'            =>$r['nama_siswa'],
								// 'kriteria'        =>$r['kriteria'],
								'kelamin'         =>$r['kelamin'],
								'templahir'       =>$r['temp_lahir'],
								'tgllahir'        =>$r['tgl_lahir'],
								'agama'           =>$r['agama'],
								'alamat'          =>$r['alamat'],
								'telpon'          =>$r['telepon'],
								'darah'           =>$r['goldarah'],
								'kesehatan'       =>$r['penyakit'],
								'ketkesehatan'    =>$r['alergi'],
								// 'golongan'        =>$r['golongan'],
								// 'sumpokok'        =>$r['sumpokok'],
								// 'sumnet'          =>$r['sumnet'],
								// 'sppbulan'        =>$r['sppbulan'],
								// 	// 'jmlangsuran'     =>$r['jmlangsuran'],
								// 'angsuran'        =>$r['angsuran'],
								// 'disctb'          =>$r['disctb'],
								// 'discsaudara'     =>$r['discsaudara'],
								// 'disctunai'       =>$r['disctunai'],
								// 'disctotal'       =>$r['disctotal'],
								// 'nopendaftaran'   =>$r['nopendaftaran'],
								// 'sekolahasal'     =>$r['sekolahasal'],
								// 'photo'           =>$r['photo'],
							
							// data ayah calon siswa	
								'nama_ayah'       =>$r['nama_ayah'],
								'kebangsaan_ayah' =>$r['kebangsaan_ayah'],
								// 	// 'templahir_ayah'  =>$r['templahir'],
								// 'tgllahir_ayah'   =>$r['tgllahir'],
								// 'pekerjaan_ayah'  =>$r['pekerjaan'],
								// 'telpon_ayah'     =>$r['telpon'],
								// 'pinbb_ayah'      =>$r['pinbb'],
								// 'email_ayah'      =>$r['email'],
							
							// data ibu calon siswa	
								'nama_ibu'        =>$r['nama_ibu'],
								// 	// 'kebangsaan_ibu'  =>$r['kebangsaan'],
								// 	// 'templahir_ibu'   =>$r['templahir'],
								// 'tgllahir_ibu'    =>$r['tgllahir'],
								// 'pekerjaan_ibu'   =>$r['pekerjaan'],
								// 'telpon_ibu'      =>$r['telpon'],
								// 'pinbb_ibu'       =>$r['pinbb'],
								// 'email_ibu'       =>$r['email'],
								
								// 'nama_dar'        =>$r['nama'],
								// 'hubungan'        =>$r['hubungan'],
								// 'telpon'          =>$r['telpon'],
								// 'kakek-nama'      =>$r['kakek-nama'],
								// 'nenek-nama'      =>$r['nenek-nama']
						)));
		 // console.log(res);  alert(res); //epiii : console dan alert hanya untuk di javascript 
			break;
			// detail siswa -----------------------------------------------------------------

			// aktifkan -----------------------------------------------------------------
			case 'aktifkan':
				$e1   = mysql_query('UPDATE  '.$tb.' set aktif="0" where departemen = '.$_POST['departemen']);
				if(!$e1){
					$stat='gagal menonaktifkan';
				}else{
					$s2 = 'UPDATE  '.$tb.' set aktif="1" where replid = '.$_POST['replid'];
					$e2 = mysql_query($s2);
					if(!$e2){
						$stat='gagal mengaktifkan';
					}else{
						$stat='sukses';
					}
				//var_dump($stat);exit();
				}$out  = json_encode(array('status'=>$stat));
			break;
			// aktifkan -----------------------------------------------------------------

			// cmbkelompok -----------------------------------------------------------------
			case 'cmb'.$mnu:
				$w='';
				if(isset($_POST['replid'])){
					$w='where replid ='.$_POST['replid'];
				}else{
					if(isset($_POST[$mnu])){
						$w='where'.$mnu.'='.$_POST[$mnu];
					}elseif (isset($_POST['tahunajaran'])) {
						$w='where tahunajaran='.$_POST['tahunajaran'];
					}
				}
				
				$s	= ' SELECT *
						from '.$tb.'
						'.$w.'		
						ORDER  BY '.$mnu.' asc';
				// var_dump($s);exit();
				$e  = mysql_query($s);
				$n  = mysql_num_rows($e);
				$ar = $dt=array();

				if(!$e){ //error
					$ar = array('status'=>'error');
				}else{
					if($n==0){ // kosong 
						var_dump($n);exit();
						$ar = array('status'=>'kosong');
					}else{ // ada data
						if(!isset($_POST['replid'])){
							while ($r=mysql_fetch_assoc($e)) {
								$dt[]=$r;
							}
						}else{
							$dt[]=mysql_fetch_assoc($e);
						}$ar = array('status'=>'sukses','kelompok'=>$dt);
					}
				}
				// print_r($n);exit();
				$out=json_encode($ar);
			break;
			// cmbtingkat -----------------------------------------------------------------
			
			case 'cmbagama':
								
				$s	= ' SELECT *
						from mst_agama
						ORDER  BY urutan desc';
				// var_dump($s);exit();
				$e 	= mysql_query($s);
				$n 	= mysql_num_rows($e);
				$ar=$dt=array();

				if(!$e){ //error
					$ar = array('status'=>'error');
				}else{
					if($n=0){ // kosong 
						$ar = array('status'=>'kosong');
					}else{ // ada data
						if(!isset($_POST['replid'])){
							while ($r=mysql_fetch_assoc($e)) {
								$dt[]=$r;
							}
						}else{
							$dt[]=mysql_fetch_assoc($e);
						}$ar = array('status'=>'sukses','agama'=>$dt);
					}
				}$out=json_encode($ar);
			break;

			case 'cmbangsuran':
								
				$s	= ' SELECT *
						from psb_angsuran
						ORDER  BY cicilan desc';
				// var_dump($s);exit();
				$e 	= mysql_query($s);
				$n 	= mysql_num_rows($e);
				$ar=$dt=array();

				if(!$e){ //error
					$ar = array('status'=>'error');
				}else{
					if($n=0){ // kosong 
						$ar = array('status'=>'kosong');
					}else{ // ada data
						if(!isset($_POST['replid'])){
							while ($r=mysql_fetch_assoc($e)) {
								$dt[]=$r;
							}
						}else{
							$dt[]=mysql_fetch_assoc($e);
						}$ar = array('status'=>'sukses','angsuran'=>$dt);
					}
				}$out=json_encode($ar);
			break;


		}
	}
	echo $out;

?>