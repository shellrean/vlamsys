<!DOCTYPE html>
<html>
	<base href="./">
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<head>
	<title>{{ $banksoals->kode_banksoal }}</title>
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
		  border-top: 1px solid transparent;
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
	<table class="table table-sm">
		<tr>
			<td><strong>{{ $banksoals->kode_banksoal }}</strong></td>
		</tr>
		<tr>
			<td><hr></td>
		</tr>
		@php $no=1; 
		@endphp
		@foreach($banksoals->pertanyaans as $p)
		<tr>
			<td>
				<table class="table-sm table-mx">
					<tr>
						<td width="20px">{{ $no++ }}.</td>
						<td>{!! $p->pertanyaan !!}</td>
					</tr>
					<tr>
						<td colspan="2">
							<table class="table-sm">
								@php $a = 'a';

								@endphp
								@foreach($p->jawabans as $j)
								@php 
								$class = '';
								if($j->correct) {
									$class = 'yellow';
								}
								@endphp
								<tr class="<?= $class ?>">
									<td>{{ strtoupper(chr(ord($a))) }}. </td>
									<td>{!! $j->text_jawaban !!}</td>
								</tr>
								@php $a++ @endphp
								@endforeach
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
		</tr>
		@endforeach
	</table>
</body>
</html>