<script>
	import QRCode from "./QRJS.svelte"

	let myCodevalue = "www.google.com"
</script>

<style>
	

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



