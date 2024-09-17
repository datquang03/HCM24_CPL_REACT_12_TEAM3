
enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED"
}

enum NumericStatus {
  NotStarted = 0,
  InProgress,
  Done
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "The task is pending.";
    case Status.InProgress:
      return "The task is in progress.";
    case Status.Completed:
      return "The task is completed.";
    default:
      return "Unknown status.";
  }
}

function getNumericStatusMessage(status: NumericStatus): string {
  switch (status) {
    case NumericStatus.NotStarted:
      return "The task has not started yet.";
    case NumericStatus.InProgress:
      return "The task is in progress.";
    case NumericStatus.Done:
      return "The task is done.";
    default:
      return "Unknown numeric status.";
  }
}

const EnumPage = () => {
  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold mb-6 text-center text-black-600">Enum</h1>
      <h2 className="text-l font-semibold pt-2">Enum has 3 main types:</h2>
      <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
        <li>Numeric Enums</li>
        <li>String Enums</li>
        <li>Heterogeneous Enums (not recommended)</li>
      </ul>
      <br/>
      <h2 className="text-l font-semibold pt-2">Resule of example code:</h2>
      <h2 className="text-l font-semibold pt-2">String Enum Statuses:</h2>
      <p>{Status.Pending}</p>
      <p>{Status.InProgress}</p>
      <p>{Status.Completed}</p>
      <p>{getStatusMessage(Status.Pending)}</p>
      <p>{getStatusMessage(Status.InProgress)}</p>
      <p>{getStatusMessage(Status.Completed)}</p>
      
      <h2 className="text-l font-semibold pt-2">Numeric Enum Statuses:</h2>
      <p>{NumericStatus.NotStarted}</p>
      <p>{NumericStatus.InProgress}</p>
      <p>{NumericStatus.Done}</p>
      <p>{getNumericStatusMessage(NumericStatus.NotStarted)}</p>
      <p>{getNumericStatusMessage(NumericStatus.InProgress)}</p>
      <p>{getNumericStatusMessage(NumericStatus.Done)}</p>
    </div>
  );
};

export default EnumPage;
