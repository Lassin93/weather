const ResultLoading = () => {
  return (
    <div className="w-full max-w-[340px] m-6 h-[184px]">
      <div className="animate-pulse">
        <div className="flex-1 space-y-2 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-4">
              <div className="h-2 bg-slate-700 rounded col-start-1 col-end-2"></div>
            </div>
            <div className="grid grid-cols-2 pb-4">
              <div className="h-10 bg-slate-700 rounded"></div>
            </div>
            <div className="grid grid-cols-6">
              <div className="h-2 bg-slate-700 rounded col-start-1 col-end-3"></div>
              <div className="h-2 bg-slate-700 rounded col-start-4 col-end-7"></div>
            </div>
            <div className="grid grid-cols-6">
              <div className="h-2 bg-slate-700 rounded col-start-1 col-end-3"></div>
              <div className="h-2 bg-slate-700 rounded col-start-4 col-end-7"></div>
            </div>
            <div className="grid grid-cols-6">
              <div className="h-2 bg-slate-700 rounded col-start-1 col-end-3"></div>
              <div className="h-2 bg-slate-700 rounded col-start-4 col-end-7"></div>
            </div>
            <div className="grid grid-cols-6">
              <div className="h-2 bg-slate-700 rounded col-start-1 col-end-3"></div>
              <div className="h-2 bg-slate-700 rounded col-start-4 col-end-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultLoading;
