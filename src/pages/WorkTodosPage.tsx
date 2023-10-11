import { useEffect, useState } from 'react';
import { Check as CheckIcon, Circle as CircleIcon } from 'react-feather';
import { EndPoints } from '../api/axiosConfig';
import { getAxios } from '../api/genericApiCalls';
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

  return (
    <MainLayout>
      <h1>Work Todos Page Works!</h1>

      <section className="mb-10">
        {todos.map((t, i) => {
          return (
            <div key={t.id} className="mb-3 flex flex-row items-center justify-start">
              <div className="mr-2">
                {t.completed ? (
                  <CheckIcon />
                ) : (
                  <div>
                    <CircleIcon />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </MainLayout>
  );
};

export default WorkTodosPage;
