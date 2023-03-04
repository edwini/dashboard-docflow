export default function SelectRole({ id, name }: { id: string; name: string }) {
  return (
    <select
      id={id}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
    >
      <option value="">Elija un permiso</option>
      <option value="1">Admin</option>
      <option value="2">Backoffice</option>
    </select>
  )
}
