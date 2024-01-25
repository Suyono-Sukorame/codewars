function duplicate_encode($word) {
$word = strtolower($word);
$result = '';
for ($i = 0; $i < strlen($word); $i++) { $count=substr_count($word, $word[$i]); $result .=($count> 1) ? ')' : '(';
    }
    return $result;
    }
