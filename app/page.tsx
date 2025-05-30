import { SearchIcon } from 'lucide-react';
import Header from './components/header';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className='p-5'>
        <h2 className='text-xl font-bold'>Olá, Matheus!</h2>
        <p>Quinta-feira, 29 de Maio</p>

        <div className='mt-6 flex items-center gap-2'>
          <Input placeholder='Faça sua Busca..' />
          <Button>
            <SearchIcon />
            </Button>
        </div>

        <div className='relative h-[150px] w-full mt-6'>
          <Image src="/banner-01.png" fill alt="Agende nos melhores com Cortaê" className='object-cover rounded-xl' />
          </div>
      </div> 
    </div>
  );
};
export default Home;