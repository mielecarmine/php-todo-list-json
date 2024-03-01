<?php 

$json_list_content = file_get_contents('../data/todolist.json');
header('Content-Type: application/json');
echo $json_list_content;