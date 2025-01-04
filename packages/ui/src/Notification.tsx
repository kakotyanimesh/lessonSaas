interface NotificationProps {
    msg : string
}

export const Notification = ({msg} : NotificationProps) => {
    return (
        <div className="ui-bg-gradient-to-tr ui-from-gray-400 ui-to-blue-600 ui-shadow-lg ui-px-6 ui-py-2 ui-w-fit ui-rounded-md">
            <h1>
                {msg}
            </h1>
        </div>
    )
}