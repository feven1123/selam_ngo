// Mock data for messages
const mockMessages = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    message: "I'm interested in volunteering for your education program. How can I get involved?",
    createdAt: "2023-12-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    message: "I would like to make a donation to support your clean water initiative. What is the best way to contribute?",
    createdAt: "2023-12-14T14:22:00Z",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "+1 (555) 456-7890",
    message: "Your healthcare program is doing amazing work. I'm a doctor and would love to volunteer my services.",
    createdAt: "2023-12-12T09:15:00Z",
  },
  {
    id: "4",
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    phone: "+1 (555) 234-5678",
    message: "I'm organizing a fundraising event and would like to partner with your organization. Can we schedule a meeting?",
    createdAt: "2023-12-10T16:45:00Z",
  },
];

export default function AdminMessages() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="mt-2 text-gray-600">View messages from website visitors</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {mockMessages.map((msg) => (
              <li key={msg.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-900 truncate">
                      {msg.name}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        New
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {msg.email}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        {msg.phone}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        {new Date(msg.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">{msg.message}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}