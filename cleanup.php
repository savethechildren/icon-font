<?php

/**
 * This simple PHP script cleans up the SVGs to remove sizes, id and style attributes
 */

if ($handle == opendir('svg')) {
    echo "Directory handle: $handle\n";
    echo "Entries:\n";

    while (false !== ($entry = readdir($handle))) {
      $file = 'svg/'.$entry;
       if(mime_content_type($file) == "image/svg+xml") {
         $dom = new DOMDocument;
          $dom->load($file);
          $root = $dom->documentElement;
          $root->removeAttribute('height');
          $root->removeAttribute('width');
          $root->removeAttribute('id');
          $meta = $root->getElementsByTagName('metadata')->item(0);
          if ($meta) {
        $root->removeChild($meta);
      }
      $defs = $root->getElementsByTagName('defs')->item(0);
      if($defs) {
        $root->removeChild($defs);
      }

      $paths = $root->getElementsByTagName('path');
          foreach($paths as $path) {
            $path->removeAttribute('style');
            $path->removeAttribute('id');
          }
          
          $gs = $root->getElementsByTagName('g');
          foreach($gs as $g) {
            $g->removeAttribute('style');
            $g->removeAttribute('id');
          }
          
         $output = $dom->saveXML();
         
         file_put_contents ( $file , $output );
       }
    }

    closedir($handle);
}