import { AfterViewInit, Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements AfterViewInit  {

  constructor() {
  }

  ngAfterViewInit() {
    
      $('.btn-content').on('click', function(e){
        var box = $(this).closest('.service-box');
        var block = box.closest('.service-content');
        var cont = box.children('.content');
        $(cont).toggle();
        
        $(block).children('.service-box').each(function() {
          if ($(this).attr('id') != $(box).attr('id')) {
            var otherCont = $(this).children('.content');
            $(otherCont).hide();
          }
        });
      });
   
  }

  getLabel(): Array<string> {
    return Array.from(this.serviceLabel.keys());
  }

  getText(key: string): Array<string> {
    var vv = this.serviceLabel.get(key as string) as string[];
    // this.serviceLabel
    return Array.from(vv);
  }


  serviceLabel: Map<string, string[]> = new Map([
    ["Полировка", [
      'Удаление глубоких царапин на кузове',
      'Восстановленние лакокрасочного покрытия с максимальной глубиной цвета',
      'Удаление круговых разводов, помутнений, рисок',
      'Удаление недостатков, возникающих при неграмотной покраске кузова']],
    ["Химчистка", [
      'Восстановления внешнего вида салона',
      'Борьба с неприятным запахом',
      'Дезинфекции',
      'Предотвращения аллергии',
      'Защита электропроводки',
      'Снижение нагрузки на систему кондиционирования'
    ]],
    ["Защитное покрытие", [
      'Защита лакокрасочного покрытия автомобиля',
      'Увеличение стойкости кузова к сколом и царапинам',
      'Защита от коррозии',
      'Сохранение блеска'
    ]],
    ['Аудио подготовка', [
      'Шумоизоляция',
      'Монтаж проводки для аудиосистемы',
      'Установка динамиков',
      'Установка головного мультимедиа устройства'
    ]]
  ]);

  serviceImg: Map<string, string> = new Map([
    ['Полировка', '/assets/image/car.png'],
    ["Химчистка", ""],
    ["Защитное покрытие", ""],
    ["Аудио подготовка", ""],
  ]);
}


