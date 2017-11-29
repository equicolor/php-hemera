<?php
namespace equicolor\hemera;
use GuzzleHttp\Client;

class Hemera {   
    protected $client;
    
    public function __construct($baseUri) {
        $this->client = new Client([
            'base_uri' => $baseUri,
            'timeout'  => 2.0,
        ]);
    }

    public function act($topic, $cmd, $params = []) {
        $query = $this->buildQuery($topic, $cmd, $params);
        try {
            $response = $this->client->request('GET', '/', [
                'query' => $query
            ]);
            $status = $response->getStatusCode();
            // if ($status === 200) {
            return (string) $response->getBody();
            // } else {
            //     throw new \Exception('Bad response ' . $status . ": \n" . (string) $response->getBody());
            // }
        } catch (\Exception $e) {
            var_dump($e); die;
        }
    }

    protected function buildQuery($topic, $cmd, $params = []) {
        return array_merge([ 
            'topic' => $topic,
            'cmd' => $cmd,
        ], $params);
    }
}
