<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Exception;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends BaseController
{
    public function getAll()
    {
        $result = ['status' => 200];

        try {
            $result['data'] = Book::all();
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }

        return response()->json($result, $result['status']);
    }

    public function create(Request $request)
    {        
        $this->validate(
            $request,
            [
                'title' => 'required|min:5|max:255',
                'author' => 'required|max:255',
                'price' => 'required',
                'quantity' => 'required',
                'version' => 'required',
                'description' => '',
                'sold' => '',
            ]
        );

        $result = ['status' => 201];

        try {
            $result['data'] = Book::create($request->all());
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }

        return response()->json($result, $result['status']);
    }

    public function delete($id)
    {

        $result = ['status' => 204];

        try {
            $result['data'] = Book::findOrFail($id)->delete();
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }

    public function markAsSoldOrNot($id, Request $request)
    {
        $this->validate(
            $request,
            [
                'sold' => 'required',
            ]
        );

        $result = ['status' => 200];

        try {
            $result['data'] = Book::where('id',$id)->update(['sold'=>$request->sold]);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }
}
