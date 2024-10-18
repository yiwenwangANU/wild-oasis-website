import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ConfirmDelete({ id }) {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/delete-reservation", {
        method: "POST",
        body: JSON.stringify(id),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Reservation deleted successfully");
        // After successful profile update
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
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
        <button
          className="border border-primary-800 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-800"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
