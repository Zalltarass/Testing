<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */



    public function index()
    {
        $data = Barang::all();
        return response()->json([
            'status' => true,
            'message' => 'Data Barang ditemukan!',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataBarang = new Barang;

        $rules = [
            'nama_barang' => 'required',
            'harga_barang' => 'required',
            'diskon_barang' => 'numeric',
            'gambar_barang' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Gagal Menambah Data!',
                'data' => $validator->errors()
            ]);
        }

        $dataBarang->nama_barang = $request->nama_barang;
        $dataBarang->harga_barang = $request->harga_barang;
        $dataBarang->diskon_barang = $request->diskon_barang;
        $dataBarang->gambar_barang = $request->gambar_barang;

        $post = $dataBarang->save();



        return response()->json([
            'status' => true,
            'message'=> 'Berhasil Menambah Data',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Barang::find($id);
        if ($data) {
            return response()->json([
                'status'=> true,
                'message'=> 'Berhasil Menemukan data!',
                'data' => $data,
            ]);
        }
        return response()->json([
            'status'=> false,
            'message'=> 'Gagal Menemukan data!',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataBarang = Barang::find($id);

        if (empty($dataBarang)){
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan!',
            ], 404);
        }

        $rules = [
            'nama_barang' => 'required',
            'harga_barang' => 'required',
            'diskon_barang' => 'numeric',
            'gambar_barang' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Gagal Mengupdate Data!',
                'data' => $validator->errors()
            ]);
        }

        $dataBarang->nama_barang = $request->nama_barang;
        $dataBarang->harga_barang = $request->harga_barang;
        $dataBarang->diskon_barang = $request->diskon_barang;
        $dataBarang->gambar_barang = $request->gambar_barang;

        $post = $dataBarang->save();



        return response()->json([
            'status' => true,
            'message'=> 'Berhasil Mengupdate Data',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataBarang = Barang::find($id);

        if (empty($dataBarang)){
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan!',
            ], 404);
        }

        $dataBarang->delete();

        return response()->json([
            'status' => true,
            'message'=> 'Berhasil Menghapus Data',
        ]);
    }
}
