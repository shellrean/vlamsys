<!DOCTYPE html>
<html>
	<base href="./">
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<head>
	<title>Data sekolah</title>
	<style type="text/css" media="all">
		html {
		  font-family: sans-serif;
		  line-height: 1.15;
		  -webkit-text-size-adjust: 100%;
		  -webkit-tap-highlight-color: rgba(0, 0, 21, 0);
		}
		body {
		  margin: 0;
		  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		  font-size: 0.675rem;
		  font-weight: 400;
		  line-height: 1.5;
		  text-align: left;
		  color: #3c4b64;
		}
		table {
		  border-collapse: collapse;
		}
		.table {
		  color: #4f5d73;
		}

		.table th,
		.table td {
		  padding: 0.15rem;
		  vertical-align: top;
		  border: 1px solid #eee;
		}

		.table thead th {
		  vertical-align: bottom;
		  border-bottom: 2px solid transparent;
		}

		.table tbody + tbody {
		  border-top: 2px solid transparent;
		}
		.table-sm th,
		.table-sm td {
		  padding: 0.15rem;
		}
		p {
		  margin-top: 0;
		  margin-bottom: 1rem;
		}
		.mder {
			width: 50px;
		}
		.table-mx {
			width: 100%;
		}
		.yellow {
			background-color: #eee;
		}
	</style>
</head>
<body>
	<h3>DATA SEKOLAH TERDAFTAR</h3>
	<table class="table table-sm">
		<tr>
			<td width="10px">No</td>
			<td>NP</td>
			<td>Nama sekolah</td>
			<td width="300px">Alamat</td>
		</tr>
		@php $no=1; 
		@endphp
		@foreach($sekolahs as $sekolah)
		<tr>
			<td>{{ $no++ }}</td>
			<td>{{ $sekolah->nis }}</td>
			<td>{{ $sekolah->nama }}</td>
			<td>{{ $sekolah->alamat }}</td>
		</tr>
		@endforeach
	</table>
</body>
</html>