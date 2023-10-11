import { useEffect, useState } from 'react';
import { Check as CheckIcon, Circle as CircleIcon } from 'react-feather';
import { EndPoints } from '../api/axiosConfig';
import { deleteAxios, getAxios, postAxios, putAxios } from '../api/genericApiCalls';
import Button from '../components/Button';
import FormSubmssion from '../components/FormSubmission';
import useBudget from '../custom-hooks/useBudget';
import MainLayout from '../views/MainLayout';
import type { Todo } from '../models/todoType';

const WorkTodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false); // spinner/loader UI

  const { randomValues, createRandomBudget } = useBudget();

  useEffect(() => {
    getTodosAsync();
  }, []);

  const getTodosAsync = async () => {
    setLoading(true);

    // const { data } = await getAxios<Todo[]>('todos'); // with side effects
    // setTodos(data); // this will run if getAxios fails because there is no try-catch

    try {
      // side effects means you don't know if the function will succeed or fail
      const { data } = await getAxios<Todo[]>(EndPoints.todos); // with side effects
      setTodos(data); // this will not run if getAxios fails
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const deleteWorkTodoAsync = async (id: string) => {
    setLoading(true);
    try {
      // mutating (deleting) a row in the database
      await deleteAxios(EndPoints.todos, id);
      // remove the selected item from the todos state
      const filteredTodos = todos.filter(t => {
        return t.id !== id;
      });
      // update the UI using the setter function of the todos local state or useState
      setTodos(filteredTodos);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const updateWorkTodoAsync = async (todo: Todo) => {
    try {
      todo.completed = !todo.completed;
      await putAxios<void, Todo>(EndPoints.todos, todo.id, todo);
      // update the UI after sending the request to the server
      const updatedTodos = [...todos];
      setTodos(updatedTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { data } = await postAxios<Todo>(EndPoints.todos, values);
      // updating the state in the UI
      const newTodos = [...todos, data];
      setTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <MainLayout>
      <h2>
        Budget for the day: USD <span>{randomValues}</span>
      </h2>
      <button className="btn btn--secondary" type="button" onClick={createRandomBudget}>
        GET RANDOM
      </button>
      <FormSubmssion save={handleSubmit} />
      <section className="mb-10">
        {todos.map((t, i) => {
          return (
            <div key={t.id} className="mb-3 flex flex-row items-center justify-start">
              <div className="mr-2">
                {t.completed ? (
                  <CheckIcon
                    onClick={async () => {
                      return await updateWorkTodoAsync(t);
                    }}
                  />
                ) : (
                  <div>
                    <CircleIcon
                      onClick={async () => {
                        return await updateWorkTodoAsync(t);
                      }}
                    />
                  </div>
                )}
              </div>

              <Button
                onClick={async () => {
                  if (t.completed) await deleteWorkTodoAsync(t.id);
                }}
              >
                {t.title}
              </Button>
            </div>
          );
        })}
      </section>
      <h3>{loading ? 'Loading..' : 'You have ' + todos.length + ' todo'}</h3>
    </MainLayout>
  );
};

export default WorkTodosPage;
