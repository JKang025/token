<script>
	import QRCode from "./QRJS.svelte"

	let myCodevalue = "www.google.com"
</script>

<style>
	@font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        src: url('fonts/Work_Sans/WorkSans-VariableFont_wght.ttf'); /* IE9 Compat Modes */
    }

    h3{
        font-family: Work Sans;
    }

</style>

<h3>Present Code</h3>

<h3>
	Generate QR Codes with <a href="https://davidshimjs.github.io/qrcodejs/">QRcodeJS</a>
</h3>

<div id="qrcode-container">
    <QRCode codeValue= {myCodevalue} squareSize=200/>
</div>



