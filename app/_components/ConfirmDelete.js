function ConfirmDelete() {
  return (
    <div>
      <div className="uppercase text-white text-xl pb-3">
        Delete Reservation
      </div>
      <div className="font-normal">
        Are you sure you want to delete this reservation? This action cannot be
        undone.
      </div>
      <div className="flex gap-5 pt-4 justify-end items-center">
        <button className="border border-primary-800 px-3 py-2 rounded-md text-white hover:bg-primary-950">
          Cancel
        </button>
        <button className="border border-primary-800 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-800">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
