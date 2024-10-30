export function RowKerja (props:any) {
    return(
        <div className="border-2 border-gray-700 rounded-lg bg-gray-500 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-3 text-slate-100" >{props.kerja}</div>
            <div className="col-span-12 md:col-span-3 text-slate-100">{props.tempat}</div>
            <div className="col-span-12 md:col-span-3 text-slate-100">{props.tahun}</div>
          </div>
        </div>
        </div>
        );
}

export function RiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pekerjaan</h2>
        <RowKerja  kerja="web developer" tempat="microsoft" tahun="2025"/>
        <RowKerja  kerja="web developer" tempat="microsoft" tahun="2025"/>
        <RowKerja  kerja="web developer" tempat="microsoft" tahun="2025"/>
        <RowKerja  kerja="web developer" tempat="microsoft" tahun="2025"/>
      </div>
    );
}