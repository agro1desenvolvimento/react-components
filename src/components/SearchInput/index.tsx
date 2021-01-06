import { InputText } from '../..';
import {
  useState, useEffect, FC, FormEvent, useMemo,
} from 'react';

const SearchInput: FC<PropsType> = ({
  onPressEnter,
  initialQuery = onPressEnter,
  initialValue,
  urlSearchParamName = 'q',
  searchIcon,
  align = 'center',
  size = 6,
}) => {
  const [query, setQuery] = useState(
    (
      initialValue
      ?? (urlSearchParamName && new URLSearchParams(location.search).get(urlSearchParamName))
    ) || '',
  );

  const osSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onPressEnter(query);

    if (urlSearchParamName) {
      const newURL = new URL(location.href);

      if (query) newURL.searchParams.set(urlSearchParamName, query);
      else newURL.searchParams.delete(urlSearchParamName);

      history.replaceState({}, '', newURL.href);
    }
  };

  const gridSizes = useMemo(() => {
    const getGridSize = (grid: number) => Math.max(Math.min(Math.round(grid), 12), 1);

    return `p-col-${getGridSize(size * 2)} p-md-${getGridSize(size)} p-lg-${getGridSize(size / 2)}`;
  }, [size]);

  useEffect(() => { initialQuery(query); }, []);

  return (
    <form onSubmit={osSubmit} className={`p-grid p-justify-${align}`}>
      <div className={`${gridSizes} p-my-3`}>
        <span className="p-input-icon-left p-d-block p-fluid">
          {searchIcon}
          <InputText
            value={query}
            type="search"
            className="ui-fluid"
            placeholder="Filtrar"
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </span>
        <small className="p-text-right p-d-block">Pressione Enter para pesquisar.</small>
      </div>
    </form>
  );
};

interface PropsType {
  onPressEnter: (query: string) => void;
  searchIcon: React.ReactNode,
  initialQuery?: (query: string) => void;
  initialValue?: string;
  urlSearchParamName?: string | false;
  className?: string;
  align?: 'start' | 'center' | 'end';
  size?: number;
}

export default SearchInput;
