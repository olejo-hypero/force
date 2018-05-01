<?php
$num = file_get_contents('https://blockchain.info/tobtc?'.http_build_query($_GET));
echo $num;