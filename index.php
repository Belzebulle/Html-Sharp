<?php

// for each folder in the current directory create a link
foreach (glob("*", GLOB_ONLYDIR) as $dir) {
    echo "<a href='$dir'>$dir</a><br>";
}

?>