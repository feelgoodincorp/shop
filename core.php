<?php 


//echo date('H:i:s');

// //указываем что страница возвращает json(нужно попробовать с xml)
header("Content-type: application/json; charset=utf-8");

class Page{

	public $title;
	public $body;

	public function __construct($title, $body){
		$this->title = $title;
		$this->body = $body;
	}
}

$item_data = [new Page('test1','<p>test1</p>'), new Page('test2','<p>test2</p>')];

$id = $_GET["0"];

$response = $item_data[$id - 0];

die(json_encode($response));

?>